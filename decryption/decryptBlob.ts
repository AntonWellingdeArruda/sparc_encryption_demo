import fs from 'fs';
import path from 'path';
import secrets from 'secrets.js-grempe';
import { fileURLToPath } from 'url';

// Workaround for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load shares (correct path)
const shares = JSON.parse(fs.readFileSync('encryption/shares.json', 'utf-8'));

// Pick any 3 of the 5 shares
const subset = [shares[0], shares[2], shares[4]];

// Recombine the secret
const recoveredHex = secrets.combine(subset);
const recoveredBlob = secrets.hex2str(recoveredHex);

// Ensure 'decryption/data' folder exists
const outputDir = path.join(__dirname, 'data');
fs.mkdirSync(outputDir, { recursive: true });

// Save result
fs.writeFileSync(path.join(outputDir, 'decrypted-blob.json'), recoveredBlob);

// ✅ Print to terminal
console.log('\n✅ Blob decrypted. Result saved to decryption/data/decrypted-blob.json');
console.log('\n🔍 Decrypted Blob Content:\n');
console.log(recoveredBlob);
