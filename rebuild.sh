#!/bin/bash

echo "🧹 Czyszczenie starego buildu..."
rm -rf dist
rm -rf node_modules/.vite

echo "🔨 Budowanie projektu..."
npm run build

echo "✅ Gotowe! Build znajduje się w folderze dist/"
echo ""
echo "🚀 Aby uruchomić lokalny podgląd:"
echo "   npm run preview"
echo ""
echo "📝 Lub otwórz dist/index.html w przeglądarce"
