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

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [ts-node](https://typestrong.org/ts-node/):  
  Install globally or run with `npx`

```bash
npm install
