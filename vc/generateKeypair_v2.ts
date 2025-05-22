import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

// Generate Ed25519 keypair
const keypair = nacl.sign.keyPair();

// Encode keys to Base64
const privateKeyBase64 = naclUtil.encodeBase64(keypair.secretKey); // 64 bytes
const publicKeyBase64 = naclUtil.encodeBase64(keypair.publicKey);   // 32 bytes

console.log('Private Key (Base64, 64 bytes):', privateKeyBase64);
console.log('Public Key (Base64, 32 bytes):', publicKeyBase64);