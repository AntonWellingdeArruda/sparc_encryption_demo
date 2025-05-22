import fs from 'fs';
import crypto from 'crypto';

// Load VC from file
const vcJwt = fs.readFileSync('scripts/data/vc-jwt.txt', 'utf-8'); // Save your VC JWT string to this file

// SHA-256 hash as a "commitment" for demo purposes
const hash = crypto.createHash('sha256').update(vcJwt).digest('hex');

// Example client + bank data
const blob = {
  commitment: hash,
  client_id: 'client123',
  bank_name: 'ABN Amro',
  bank_id: 'NLABN123456789',
  issuer: 'did:example:bankx',
  vc: vcJwt, // You can choose to omit this if you only want selective reveal
};

fs.writeFileSync('scripts/data/blob.json', JSON.stringify(blob, null, 2));
console.log('✅ Blob saved to data/blob.json');
