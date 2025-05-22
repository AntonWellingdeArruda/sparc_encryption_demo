import fs from 'fs';
import { createVerifiableCredentialJwt } from 'did-jwt-vc';
import { EdDSASigner } from 'did-jwt';
import naclUtil from 'tweetnacl-util';

async function main() {
  // Load private key
  const keypair = JSON.parse(fs.readFileSync('scripts/data/keypair.json', 'utf-8'));
  const privateKeyBase64 = keypair.privateKey;

  // Decode the base64 key to a Uint8Array
  const privateKeyBytes = naclUtil.decodeBase64(privateKeyBase64);

  const issuer = {
    did: 'did:example:bankx',
    signer: EdDSASigner(privateKeyBytes),
  };

  const credentialPayload = {
    sub: 'did:example:alice',
    nbf: Math.floor(Date.now() / 1000),
    vc: {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential', 'KYC'],
      credentialSubject: {
        name: 'Alice',
        residency: 'EU',
        passedKYC: true,
      },
    },
  };

  const vcJwt = await createVerifiableCredentialJwt(credentialPayload, issuer);

  // Ensure directory exists
  const outputDir = './scripts/data';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(`${outputDir}/vc-jwt.txt`, vcJwt);
  console.log('✅ VC JWT saved to scripts/data/vc-jwt.txt');
}

main();
