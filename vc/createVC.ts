import { createVerifiableCredentialJwt } from 'did-jwt-vc';
import { EdDSASigner } from 'did-jwt';
import naclUtil from 'tweetnacl-util';

// Base64-encoded Ed25519 private key (from generateKeypair.ts)
const privateKeyBase64 = 'fenLt4Qoz7W7WGmo5Jui2rGue6QOocav+kVAc2Xby+47JGVEBBaBVPA+zkeMWuqIFp5jOG8rcTBKrRu7dDbcUQ==';

// Decode the base64 key to a Uint8Array
const privateKeyBytes = naclUtil.decodeBase64(privateKeyBase64);

// Issuer with signer
const issuer = {
  did: 'did:example:bankx',
  signer: EdDSASigner(privateKeyBytes),
};

// VC payload
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

// Wrap in async main to allow top-level await
async function main() {
  const vcJwt = await createVerifiableCredentialJwt(credentialPayload, issuer);
  console.log('VC JWT:\n', vcJwt);
}

main();