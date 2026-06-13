#!/usr/bin/env node
import QRCode from 'qrcode';
import fs from 'fs';

const [,, text, out] = process.argv;
if (!text || !out) {
  console.error('Usage: node tools/generate-qr.js <text-or-url> <out-file.png>');
  process.exit(1);
}

QRCode.toFile(out, text, { width: 400 })
  .then(() => console.log('QR image written to', out))
  .catch((err) => { console.error(err); process.exit(1); });
