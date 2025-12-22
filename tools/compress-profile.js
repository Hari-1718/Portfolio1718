import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = path.resolve(process.cwd(), 'public', 'hari-profile.jpg');
const tmp = path.resolve(process.cwd(), 'public', 'hari-profile.optimized.jpg');

if (!fs.existsSync(input)) {
  console.error('Profile image not found:', input);
  process.exit(1);
}

(async () => {
  try {
    const image = sharp(input);
    const metadata = await image.metadata();

    const resizeOpts = {};
    if (metadata.width && metadata.width > 1200) {
      resizeOpts.width = 1200; // cap width for web usage
    }

    await image
      .resize(resizeOpts)
      .jpeg({ quality: 82, progressive: true })
      .toFile(tmp);

    const origSize = fs.statSync(input).size;
    const newSize = fs.statSync(tmp).size;

    if (newSize < origSize) {
      await fs.promises.rename(tmp, input);
      const savedKB = ((origSize - newSize) / 1024).toFixed(1);
      console.log(`Optimized profile image. Saved ${savedKB} KB`);
    } else {
      fs.unlinkSync(tmp);
      console.log('Optimization skipped; output was not smaller.');
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
