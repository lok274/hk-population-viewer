const themeMeta = document.querySelector('meta[name="color-scheme"]');
const themeButton = document.querySelector('[data-theme-toggle]');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
const themeKey = 'economy-color-scheme';
function currentTheme() {
  return themeMeta.content === 'light dark' ? (systemTheme.matches ? 'dark' : 'light') : themeMeta.content;
}
function updateThemeButton() {
  themeButton.setAttribute('aria-pressed', String(currentTheme() === 'dark'));
}
themeButton.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  const followsSystem = (next === 'dark') === systemTheme.matches;
  themeMeta.content = followsSystem ? 'light dark' : next;
  try {
    if (followsSystem) localStorage.removeItem(themeKey);
    else localStorage.setItem(themeKey, next);
  } catch { /* The selected mode still applies in this page. */ }
  updateThemeButton();
});
systemTheme.addEventListener('change', updateThemeButton);
window.addEventListener('storage', event => {
  if (event.key !== themeKey && event.key !== null) return;
  themeMeta.content = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : 'light dark';
  updateThemeButton();
});
updateThemeButton();
themeButton.hidden = false;
