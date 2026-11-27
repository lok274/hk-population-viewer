import {records} from './population-data.js';
import {economy} from './economic-data.js';
import {getIndicator} from './indicator-data.js';
import {getTopic} from './us-economy-data.js?v=20261126-stage2';

const preview = document.querySelector('[data-region-preview]');
const metrics = document.querySelector('#preview-metrics');
const number = new Intl.NumberFormat('zh-Hant-HK', {maximumFractionDigits: 1});
const rate = new Intl.NumberFormat('zh-Hant-HK', {minimumFractionDigits: 2, maximumFractionDigits: 2});
document.querySelector('[data-region-legend]').textContent = '已開放數據頁：' + window.siteRegions.map(region => region.label).join('、');
function metric(label, value, period, source) {
  const card = document.createElement('div');
  card.className = 'preview-metric';
  const title = document.createElement('span'); title.textContent = label;
  const amount = document.createElement('strong'); amount.textContent = value;
  const detail = document.createElement('small'); detail.textContent = period;
  const link = document.createElement('a'); link.href = source; link.textContent = '官方來源 ↗';
  card.append(title, amount, detail, link);
  return card;
}
function hkMetrics() {
  const pop = records.at(-1), gdp = economy.latestQuarter, jobs = getIndicator('unemployment').rolling.at(-1);
  return [
    metric('年中人口', new Intl.NumberFormat('zh-Hant-HK').format(pop.total.thousands * 1000) + ' 人', `${pop.year} 年中 · ${pop.total.status}`, pop.total.source.url),
    metric('實質 GDP 按年增長', number.format(gdp.yearOnYear.percent) + '%', `${gdp.year} 年第 ${gdp.quarter} 季 · ${gdp.yearOnYear.status}`, gdp.yearOnYear.source.url),
    metric('經季調失業率', number.format(jobs.value) + '%', `${jobs.period.year} 年 ${jobs.period.startMonth}–${jobs.period.endMonth} 月 · ${jobs.status}`, jobs.source.url),
  ];
}
function usMetrics() {
  const gdp = getTopic('output').series.gdpQuarter, jobs = getTopic('labour').series.unemployment, rates = getTopic('rates').series;
  const g = gdp.observations.at(-1), j = jobs.observations.at(-1), lo = rates.targetLow.observations.at(-1), hi = rates.targetHigh.observations.at(-1);
  const statuses = {published:'官方表列', revised:'修訂數字', estimate:'估算', preliminary:'初步數字', advance:'初值', effective:'政策生效'};
  const month = period => `${period.slice(0,4)} 年 ${Number(period.slice(5))} 月`;
  return [
    metric('實質 GDP 按季增長', number.format(g.value) + '%', `${g.period.slice(0,4)} 年第 ${g.period.at(-1)} 季 · 年率化 · ${statuses[g.status] || g.status}`, g.sourceUrl),
    metric('失業率 U-3', j.value === null ? '—' : number.format(j.value) + '%', `${month(j.period)} · ${j.value === null ? '缺數' : (statuses[j.status] || j.status)}`, j.sourceUrl),
    metric('聯邦基金目標區間', rate.format(lo.value) + '–' + rate.format(hi.value) + '%', `${lo.period} 生效`, lo.sourceUrl),
  ];
}
function selectRegion(id) {
  const region = window.siteRegions.find(item => item.id === id);
  if (!region) return;
  preview.dataset.selectedRegion = id;
  document.querySelector('#preview-title').textContent = `${region.label} ${region.english}`;
  document.querySelector('#preview-description').textContent = region.summary;
  document.querySelector('#preview-code').textContent = region.id.toUpperCase();
  const entry = document.querySelector('#preview-enter'); entry.href = region.href; entry.textContent = region.previewButton || `進入${region.label}資料頁 →`;
  document.querySelector('#preview-secondary').hidden = id !== 'hk';
  const topics = document.querySelector('#preview-topics');
  topics.replaceChildren(...(region.previewTopics || []).map(topic => { const chip = document.createElement('span'); chip.textContent = topic; return chip; }));
  try { metrics.replaceChildren(...(id === 'hk' ? hkMetrics() : id === 'us' ? usMetrics() : [])); }
  catch { const p = document.createElement('p'); p.textContent = '摘要暫未能載入，可進入資料頁查看。'; metrics.replaceChildren(p); }
  document.querySelectorAll('[data-map-region]').forEach(link => {
    const item = window.siteRegions.find(entry => entry.id === link.dataset.mapRegion);
    link.classList.toggle('is-selected', link.dataset.mapRegion === id);
    link.setAttribute('aria-label', `選取${item.label}，查看摘要`);
  });
}
selectRegion('hk');
document.querySelector('[data-world-map]').addEventListener('map-ready', () => selectRegion(preview.dataset.selectedRegion));
document.querySelector('[data-world-map]').addEventListener('click', event => {
  const link = event.target.closest('[data-map-region]');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  selectRegion(link.dataset.mapRegion);
});

const mapViewport = document.querySelector('[data-world-map]');
const mapControls = document.querySelector('[data-map-controls]');
const mapScaleLabel = document.querySelector('[data-map-scale]');
const mapPanControls = document.querySelector('[data-map-pan-controls]');
const zoomLevels = [1, 1.5, 2, 3];
let zoomIndex = 0, mapX = 0, mapY = 0;
let drag = null, suppressMapClick = false;
function paintMap() {
  const content = mapViewport.querySelector('.world-map-content');
  if (!content) return;
  const scale = zoomLevels[zoomIndex], width = mapViewport.clientWidth, height = mapViewport.clientHeight;
  mapX = Math.max(width * (1 - scale), Math.min(0, mapX));
  mapY = Math.max(height * (1 - scale), Math.min(0, mapY));
  content.style.transform = `translate(${mapX}px, ${mapY}px) scale(${scale})`;
  mapScaleLabel.textContent = `${Math.round(scale * 100)}%`;
  mapControls.querySelector('[data-map-zoom="out"]').disabled = zoomIndex === 0;
  mapControls.querySelector('[data-map-zoom="in"]').disabled = zoomIndex === zoomLevels.length - 1;
  mapControls.querySelector('[data-map-zoom="reset"]').disabled = zoomIndex === 0;
  mapPanControls.hidden = zoomIndex === 0;
  document.querySelector('[data-map-hint]').hidden = zoomIndex === 0;
  mapViewport.classList.toggle('is-zoomed', zoomIndex > 0);
}
function centerRegion(id) {
  const region = window.siteRegions.find(item => item.id === id);
  if (!region?.map) return;
  const scale = zoomLevels[zoomIndex];
  mapX = mapViewport.clientWidth * (0.5 - (region.map.longitude + 180) / 360 * scale);
  mapY = mapViewport.clientHeight * (0.5 - (90 - region.map.latitude) / 180 * scale);
  paintMap();
}
function initializeMapControls() { mapControls.hidden = false; paintMap(); }
mapViewport.addEventListener('map-ready', initializeMapControls);
if (!mapViewport.hidden) initializeMapControls();
mapControls.addEventListener('click', event => {
  const zoom = event.target.closest('[data-map-zoom]')?.dataset.mapZoom;
  const pan = event.target.closest('[data-map-pan]')?.dataset.mapPan;
  if (zoom) {
    zoomIndex = zoom === 'reset' ? 0 : Math.max(0, Math.min(zoomLevels.length - 1, zoomIndex + (zoom === 'in' ? 1 : -1)));
    centerRegion(preview.dataset.selectedRegion);
  } else if (pan) {
    const step = mapViewport.clientWidth * 0.25;
    if (pan === 'left') mapX += step;
    if (pan === 'right') mapX -= step;
    if (pan === 'up') mapY += step;
    if (pan === 'down') mapY -= step;
    paintMap();
  }
});
mapViewport.addEventListener('focusin', event => {
  const region = event.target.closest('[data-map-region]');
  if (region && zoomIndex) centerRegion(region.dataset.mapRegion);
});
mapViewport.addEventListener('pointerdown', event => {
  suppressMapClick = false;
  if (!zoomIndex || event.button !== 0) return;
  drag = {id: event.pointerId, x: event.clientX, y: event.clientY, mapX, mapY, moved: false};
});
mapViewport.addEventListener('pointermove', event => {
  if (!drag || drag.id !== event.pointerId) return;
  const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
  if (!drag.moved && Math.hypot(dx, dy) > 6) {
    drag.moved = true;
    mapViewport.setPointerCapture(event.pointerId);
  }
  if (drag.moved) { mapX = drag.mapX + dx; mapY = drag.mapY + dy; paintMap(); }
});
mapViewport.addEventListener('pointerup', event => {
  if (drag?.id !== event.pointerId) return;
  suppressMapClick = drag.moved;
  drag = null;
});
mapViewport.addEventListener('pointercancel', () => { drag = null; });
mapViewport.addEventListener('click', event => {
  if (suppressMapClick) { event.preventDefault(); event.stopImmediatePropagation(); suppressMapClick = false; }
}, true);
window.addEventListener('resize', paintMap);
