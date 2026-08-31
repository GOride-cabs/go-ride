import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images/vehicles');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'GoRideTirupatiBot/1.0 (contact@goridetirupaticab.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'GoRideTirupatiBot/1.0 (contact@goridetirupaticab.com)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(dest);
      });
    }).on('error', reject);
  });
}

async function searchAndDownload(query, excludes, filename) {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json&srlimit=15`;
    const searchData = await fetchJson(searchUrl);
    const results = searchData?.query?.search || [];
    
    for (const res of results) {
      const title = res.title.toLowerCase();
      if (excludes.some(e => title.includes(e.toLowerCase()))) continue;

      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(res.title)}&prop=imageinfo&iiprop=url|mime&format=json`;
      const infoData = await fetchJson(infoUrl);
      const pages = infoData?.query?.pages || {};
      const page = Object.values(pages)[0];
      const imgInfo = page?.imageinfo?.[0];
      if (imgInfo && imgInfo.url && (imgInfo.mime === 'image/jpeg' || imgInfo.mime === 'image/png' || imgInfo.mime === 'image/webp')) {
        const dest = path.join(outDir, filename);
        console.log(`Found [${query}]: ${res.title} -> ${dest}`);
        await downloadFile(imgInfo.url, dest);
        return;
      }
    }
  } catch (err) {
    console.error(`Error downloading ${query}:`, err);
  }
}

async function run() {
  // Bright exterior Ertiga
  await searchAndDownload('Suzuki Ertiga', ['parking', 'garage', 'interior', 'crash', 'dark'], 'Eritiga.jpg');
  // Bright exterior Innova Crysta
  await searchAndDownload('Toyota Innova Crysta', ['zenix', 'fortuner', 'interior', 'crash'], 'toyota-innova-crysta.webp');
  // Bright exterior Dzire
  await searchAndDownload('Maruti Suzuki Dzire', ['interior', 'crash', 'dark'], 'swift-dzire.jpg');
}

run();
