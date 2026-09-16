import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = [
  'public/images/temples',
  'public/images/vehicles',
  'public/images/sightseeing',
  'public/images',
  'public'
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  let totalSavedBytes = 0;

  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);

    for (const file of files) {
      if (file.endsWith('.tmp')) {
        try { fs.unlinkSync(path.join(dir, file)); } catch (e) {}
        continue;
      }

      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) continue;

      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

      const originalSize = stat.size;

      // Skip tiny files unless logo / favicon
      if (originalSize < 25 * 1024 && !file.includes('logo') && !file.includes('favicon')) {
        continue;
      }

      try {
        const inputBuffer = fs.readFileSync(fullPath);
        const metadata = await sharp(inputBuffer).metadata();

        let pipeline = sharp(inputBuffer);

        // Resize if larger than 1200px
        if (metadata.width && metadata.width > 1200) {
          pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
        }

        // Specific rules
        if (file.includes('logo')) {
          pipeline = sharp(inputBuffer).resize({ width: 256, height: 256, fit: 'inside', withoutEnlargement: true });
          if (ext === '.png') {
            pipeline = pipeline.png({ quality: 85, compressionLevel: 9 });
          }
        } else if (file === 'favicon.png') {
          pipeline = sharp(inputBuffer).resize({ width: 64, height: 64 }).png({ quality: 85, compressionLevel: 9 });
        } else if (file === 'favicon.ico') {
          pipeline = sharp(inputBuffer).resize({ width: 32, height: 32 }).png({ quality: 85, compressionLevel: 9 });
        } else if (ext === '.jpg' || ext === '.jpeg') {
          pipeline = pipeline.jpeg({ quality: 80, progressive: true, mozjpeg: true });
        } else if (ext === '.webp') {
          pipeline = pipeline.webp({ quality: 80, effort: 6 });
        } else if (ext === '.png') {
          pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
        }

        const outputBuffer = await pipeline.toBuffer();

        if (outputBuffer.length < originalSize) {
          fs.writeFileSync(fullPath, outputBuffer);
          const saved = originalSize - outputBuffer.length;
          totalSavedBytes += saved;
          console.log(`Optimized ${fullPath}: ${(originalSize / 1024).toFixed(1)} KB -> ${(outputBuffer.length / 1024).toFixed(1)} KB (Saved ${(saved / 1024).toFixed(1)} KB)`);
        } else {
          console.log(`Kept ${fullPath} (${(originalSize / 1024).toFixed(1)} KB)`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err.message);
      }
    }
  }

  console.log(`\n🎉 Total Saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB!`);
}

optimizeImages();
