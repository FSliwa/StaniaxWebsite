const fs = require('fs');
const path = require('path');

const keywords = [
  'vacuum',
  'regeneration',
  'metalizacja próżniowa',
  'metalizowanie próżniowe',
  'metalizacja plastiku',
  'vakuumbeschichtung',
  'metallization',
  'vacuum metallization',
  'vacuum metalizing',
  'metalizacja',
  'metalizacja próżniowa cennik',
  'metalizacja tworzyw sztucznych',
  'metalizacja tworzyw sztucznych cennik',
  'metalizacja plastików cennik',
  'metalizacja próżniowa aluminium',
  'metalizacja aluminium'
];

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)
  arrayOfFiles = arrayOfFiles || []
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
    }
  })
  return arrayOfFiles
}

const files = getAllFiles('src').filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));

const results = {};
keywords.forEach(kw => results[kw] = false);

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8').toLowerCase();
  keywords.forEach(kw => {
    if (content.includes(kw.toLowerCase())) {
      results[kw] = true;
    }
  });
});

console.log(JSON.stringify(results, null, 2));
