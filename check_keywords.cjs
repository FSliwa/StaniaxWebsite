const fs = require('fs');
const path = require('path');

const keywords = [
  'vacuum',
  'regeneration',
  'metalizacja próżniowa',
  'metalizacja tworzyw',
  'vakuummetallisierung',
  'metallization',
  'vacuum metallization',
  'metalizacja',
  'staniax',
  'metalizacja tworzyw sztucznych',
  'metalizacja próżniowa dariusz staniak',
  'metalizacja próżniowa tworzyw sztucznych',
  'metalizacja aluminium',
  'metalizacja dariusz staniak',
  'regeneracja lamp samochodowych',
  'regeneracja reflektorów',
  'regeneracja lamp',
  'naprawa lamp samochodowych',
  'regeneracja odbłyśników'
];

const filesToScan = [
  'src/lib/translations.ts',
  'src/pages/HomePage.tsx',
  'src/pages/ArticleAviation.tsx',
  'src/pages/ArticleBeauty.tsx',
  'src/pages/ArticleReflectors.tsx',
  'src/pages/NewsPage.tsx',
  'src/pages/GalleryPage.tsx'
];

const results = {};

keywords.forEach(kw => {
  results[kw] = false;
});

filesToScan.forEach(file => {
  const content = fs.readFileSync(path.join(__dirname, file), 'utf-8').toLowerCase();
  keywords.forEach(kw => {
    if (content.includes(kw.toLowerCase())) {
      results[kw] = true;
    }
  });
});

console.log("Znalezione na stronie:");
keywords.forEach(kw => {
  console.log(`- ${kw}: ${results[kw] ? 'TAK' : 'NIE'}`);
});
