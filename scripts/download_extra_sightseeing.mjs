import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images/sightseeing');

const queries = [
  { id: 'papavinasam', query: 'Papavinasanam' },
  { id: 'govindaraja-swamy', query: 'Govindaraja' },
  { id: 'iskcon-tirupati', query: 'ISKCON' },
  { id: 'alipiri', query: 'Alipiri' },
  { id: 'deer-park', query: 'Tirupati' },
  { id: 'ttd-gardens', query: 'Tirumala Hills' }
];

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

async function searchAndDownload(item) {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(item.query)}&srnamespace=6&format=json&srlimit=10`;
    const searchData = await fetchJson(searchUrl);
    const results = searchData?.query?.search || [];
    
    for (const res of results) {
      const title = res.title;
      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|mime&format=json`;
      const infoData = await fetchJson(infoUrl);
      const pages = infoData?.query?.pages || {};
      const page = Object.values(pages)[0];
      const imgInfo = page?.imageinfo?.[0];
      if (imgInfo && imgInfo.url && (imgInfo.mime === 'image/jpeg' || imgInfo.mime === 'image/png' || imgInfo.mime === 'image/webp')) {
        const ext = imgInfo.mime === 'image/png' ? '.png' : imgInfo.mime === 'image/webp' ? '.webp' : '.jpg';
        const dest = path.join(outDir, `${item.id}${ext}`);
        console.log(`Downloading ${title} -> ${dest}`);
        await downloadFile(imgInfo.url, dest);
        return `${item.id}${ext}`;
      }
    }
  } catch (err) {
    console.error(`Error downloading ${item.id}:`, err);
  }
}

async function run() {
  for (const item of queries) {
    await searchAndDownload(item);
  }
  console.log('Finished extra images download!');
}

run();
