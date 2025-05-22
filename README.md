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
npm install --save-dev ts-node typescript
npm install secrets.js-grempe
```

🚀 Execution Steps
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

Output:

Reconstructs blob from 3/5 shares.

Saves decrypted result to decryption/data/decrypted-blob.json.

Prints the content to the terminal.

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [ts-node](https://typestrong.org/ts-node/):  
  Install globally or run with `npx`

```bash
npm install --save-dev ts-node typescript
npm install secrets.js-grempe
