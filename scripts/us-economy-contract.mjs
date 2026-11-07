import { readFileSync } from 'node:fs';
import { getUpdateSpecs, validateSnapshot } from '../dist/us-economy-data.js';
import snapshot from '../dist/us-economy-snapshot.js';

try {
  if (process.argv[2] === '--specs') {
    console.log(JSON.stringify(getUpdateSpecs()));
  } else {
    const mode = process.argv[2];
    if (!['--check', '--candidate'].includes(mode)) throw new Error('Use --specs, --check or --candidate.');
    validateSnapshot(mode === '--check' ? snapshot : JSON.parse(readFileSync(0, 'utf8')));
    console.log('Validated all U.S. economic series.');
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
