# Project SPARC – Privacy-Preserving Identity Disclosure via Secret-Shared Blobs

This repository contains a working prototype for selective disclosure of user identity in a blockchain payment system, built as part of **Project SPARC**.

The system enables compliance in illicit transaction investigations by:
- Verifying user identity via a Verifiable Credential (VC) issued by a bank.
- Creating a secret-shared encrypted identity "blob" tied to a public wallet address.
- Allowing a quorum of guardians to decrypt the blob when suspicious activity is detected.

---

## 📁 Folder Structure

- `vc/`: Verifiable Credential issued by ABN Amro to a user.
- `scripts/`: Script that hashes (commits to) the VC and builds the original blob.
- `encryption/`: Script to secret-share the blob via Shamir's Secret Sharing.
- `decryption/`: Script that simulates guardian quorum recombining the blob.

---

## 🧪 Demo Setup

🛠️ Setup (Run only once)
1. Initialize project (if not already done)
```
npm init -y
```
2. Install necessary packages
```
npm install tweetnacl tweetnacl-util did-jwt did-jwt-vc secrets.js-grempe
npm install secrets.js-grempe
```

🚀 Execution Steps
3. Run all files in one go
```
npm run run-all
```

Output:
```
🔍 Decrypted Blob Content:

{
  "commitment": "3b4f3189cbb74bc359ffda351bdc4536846cae15c408ed758d51e72d4f50b23c",
  "client_id": "client123",
  "bank_name": "ABN Amro",
  "bank_id": "NLABN123456789",
  "issuer": "did:example:bankx",
  "vc": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiS1lDIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7Im5hbWUiOiJBbGljZSIsInJlc2lkZW5jeSI6IkVVIiwicGFzc2VkS1lDIjp0cnVlfX0sInN1YiI6ImRpZDpleGFtcGxlOmFsaWNlIiwibmJmIjoxNzQ3OTA3MjA4LCJpc3MiOiJkaWQ6ZXhhbXBsZTpiYW5reCJ9.7bWnaYLuU_YPg1oEIenfghH607DxpTwXiiCn21DUOsnTJEkvQrSKu1nRRXYrZy6CrJIsSAnVcCcJi5G8szQhDg"
}
```


[OPTIONAL] If you prefer to run it sequencially:

🔐 Step 3: Generate keypair
```
node --loader ts-node/esm scripts/generateKeypair.ts
```
Output: Saves private.pem and public.pem in scripts/data/.

📄 Step 4: Place your VC JWT in

scripts/data/vc-jwt.txt
Just paste any JWT string there (mock is fine for testing).

🧠 Step 5: Create commitment blob
```
node --loader ts-node/esm scripts/createCommitment.ts
Output: Saves blob.json to scripts/data/blob.json.
```
🔐 Step 6: Encrypt blob via Shamir’s Secret Sharing
```
node --loader ts-node/esm encryption/encryptBlob.ts
Output: Saves shares.json to encryption/shares.json.
```
🔓 Step 7: Decrypt blob from shares
```
node --loader ts-node/esm decryption/decryptBlob.ts
```


### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [ts-node](https://typestrong.org/ts-node/):  
  Install globally or run with `npx`

```bash
npm install --save-dev ts-node typescript
npm install tweetnacl tweetnacl-util did-jwt did-jwt-vc secrets.js-grempe
npm install secrets.js-grempe
