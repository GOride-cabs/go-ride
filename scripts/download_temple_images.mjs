import https from 'https';
import fs from 'fs';
import path from 'path';

// Wikimedia compliant user-agent
const USER_AGENT = 'GoRideTirupatiTravelPortal/1.0 (goridetirupaticab@gmail.com) NodeJS/18.0';

// API queries to get real direct image file URLs from Wikipedia/Wikimedia
async function fetchWikiImageUrl(fileName) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url&format=json`;
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].imageinfo && pages[pageId].imageinfo[0]) {
            resolve(pages[pageId].imageinfo[0].url);
          } else {
            reject(new Error(`No imageinfo for ${fileName}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
  });
}

const templeFiles = [
  { target: 'golden-temple-vellore.jpg', wikiFile: 'Golden_Temple,_Vellore,_India.jpg' },
  { target: 'padmavathi-temple.jpg', wikiFile: 'Padmavathi_Ammavari_Temple.JPG' },
  { target: 'kanchipuram-temple.jpg', wikiFile: '01EkambareswararTemple&Kanchipuram&India.jpg' },
  { target: 'tiruttani-temple.jpg', wikiFile: 'Tiruttani_Murugan_Temple.jpg' }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
    req.on('error', reject);
  });
}

async function run() {
  const destDir = path.resolve('public/images/temples');
  for (const item of templeFiles) {
    try {
      console.log(`Querying URL for ${item.wikiFile}...`);
      const directUrl = await fetchWikiImageUrl(item.wikiFile);
      console.log(`Found URL: ${directUrl}`);
      const destPath = path.join(destDir, item.target);
      await downloadFile(directUrl, destPath);
      const stats = fs.statSync(destPath);
      console.log(`Successfully saved ${item.target} (${stats.size} bytes)`);
    } catch (err) {
      console.error(`Failed ${item.target}:`, err.message);
    }
  }
}

run();
