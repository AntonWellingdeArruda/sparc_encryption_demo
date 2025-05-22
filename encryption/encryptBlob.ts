import fs from 'fs';
import secrets from 'secrets.js-grempe';

// Read the blob file as a raw string (not parsed)
const blobString = fs.readFileSync('scripts/data/blob.json', 'utf-8');

// Convert string to hex
const hex = secrets.str2hex(blobString);

// Generate 5 shares with threshold 3
const shares = secrets.share(hex, 5, 3);

// Save to file
fs.writeFileSync('encryption/shares.json', JSON.stringify(shares, null, 2));
fs.mkdirSync('encryption', { recursive: true });
console.log('✅ Shares saved to encryption/shares.json');