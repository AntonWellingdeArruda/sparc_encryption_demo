import fs from 'fs';
import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

// Generate Ed25519 keypair
const keypair = nacl.sign.keyPair();

// Encode keys to Base64
const privateKeyBase64 = naclUtil.encodeBase64(keypair.secretKey); // 64 bytes
const publicKeyBase64 = naclUtil.encodeBase64(keypair.publicKey);   // 32 bytes

const keypairData = {
  privateKey: privateKeyBase64,
  publicKey: publicKeyBase64,
};

// Ensure directory exists
const outputDir = './scripts/data';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save to file
fs.writeFileSync(`${outputDir}/keypair.json`, JSON.stringify(keypairData, null, 2));
console.log('✅ Keypair saved to scripts/data/keypair.json');
