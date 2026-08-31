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

async function searchSpecific(query, excludeTerms, filename) {
  try {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json&srlimit=20`;
    const searchData = await fetchJson(searchUrl);
    const results = searchData?.query?.search || [];
    
    for (const res of results) {
      const title = res.title.toLowerCase();
      
      // Filter out unwanted terms like ambulance, crash, toy, interior, etc.
      const hasExcluded = excludeTerms.some(term => title.includes(term.toLowerCase()));
      if (hasExcluded) continue;

      const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(res.title)}&prop=imageinfo&iiprop=url|mime&format=json`;
      const infoData = await fetchJson(infoUrl);
      const pages = infoData?.query?.pages || {};
      const page = Object.values(pages)[0];
      const imgInfo = page?.imageinfo?.[0];
      if (imgInfo && imgInfo.url && (imgInfo.mime === 'image/jpeg' || imgInfo.mime === 'image/png' || imgInfo.mime === 'image/webp')) {
        const dest = path.join(outDir, filename);
        console.log(`Matched [${query}]: ${res.title} -> ${dest}`);
        await downloadFile(imgInfo.url, dest);
        return filename;
      }
    }
    console.log(`No matching image found for ${query}`);
  } catch (err) {
    console.error(`Error downloading ${query}:`, err);
  }
}

async function run() {
  console.log('Searching for authentic vehicle photos without ambulances or mismatched models...');

  // 1. Toyota Innova Crysta MPV (exclude zenix, fortuner, ambulance, interior)
  await searchSpecific(
    'Toyota Innova Crysta',
    ['zenix', 'fortuner', 'ambulance', 'crash', 'interior', 'rear', 'dashboard'],
    'toyota-innova-crysta.webp'
  );

  // 2. Force Tempo Traveller passenger minibus (exclude ambulance, school, police, medical)
  await searchSpecific(
    'Force Traveller minibus',
    ['ambulance', 'medical', 'patient', 'hospital', 'crash', 'wreck'],
    'diesel-force-tempo-traveller--20240714033632148.jpg'
  );

  // Fallback for Tempo Traveller if needed
  if (!fs.existsSync(path.join(outDir, 'diesel-force-tempo-traveller--20240714033632148.jpg'))) {
    await searchSpecific(
      'Force Motors Traveller',
      ['ambulance', 'medical'],
      'diesel-force-tempo-traveller--20240714033632148.jpg'
    );
  }

  // 3. Maruti Ertiga
  await searchSpecific(
    'Maruti Suzuki Ertiga',
    ['crash', 'interior', 'dashboard', 'wheel'],
    'Eritiga.jpg'
  );

  // 4. Swift Dzire
  await searchSpecific(
    'Maruti Suzuki Dzire',
    ['crash', 'interior', 'dashboard', 'taxi', 'meru'],
    'swift-dzire.jpg'
  );

  console.log('Finished updating vehicle images!');
}

run();
