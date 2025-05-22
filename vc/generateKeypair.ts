import nacl from 'tweetnacl';
import util from 'tweetnacl-util';

// Generate the keypair
const keyPair = nacl.sign.keyPair();

// Convert to base64 for easier usage
const privateKeyBase64 = util.encodeBase64(keyPair.secretKey);
const publicKeyBase64 = util.encodeBase64(keyPair.publicKey);

console.log('Ed25519 Keypair:');
console.log('Private Key (Base64):', privateKeyBase64);
console.log('Public Key (Base64):', publicKeyBase64);
