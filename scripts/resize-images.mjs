import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, extname } from 'path';

const imgDir = './src/img';
const outDir = './src/img/resized';
const MAX_WIDTH = 900;
const QUALITY = 60;

mkdirSync(outDir, { recursive: true });

const files = readdirSync(imgDir).filter(f =>
  ['.webp', '.jpeg', '.jpg', '.png'].includes(extname(f).toLowerCase())
  && f !== 'image.png' && f !== 'icon.ico' && f !== 'music.mp3'
);

console.log(`Processing ${files.length} images...`);

for (const file of files) {
  const input = join(imgDir, file);
  const output = join(outDir, file);
  const ext = extname(file).toLowerCase();

  try {
    const meta = await sharp(input).metadata();
    const shouldResize = meta.width > MAX_WIDTH;
    let pipeline = sharp(input);
    if (shouldResize) pipeline = pipeline.resize(MAX_WIDTH);

    if (ext === '.webp') {
      await pipeline.webp({ quality: QUALITY }).toFile(output);
    } else {
      await pipeline.jpeg({ quality: QUALITY }).toFile(output);
    }
    console.log(`✓ ${file}${shouldResize ? ` (${meta.width}px → ${MAX_WIDTH}px)` : ''}`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}

console.log('Done! Now run: Move-Item src/img/resized/* src/img/ -Force');
