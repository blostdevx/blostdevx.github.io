#!/bin/bash

echo "🚀 Preparando deployment para GitHub Pages..."
echo ""

# Limpiar directorio dist
echo "📁 Limpiando directorio dist..."
rm -rf dist

# Build del proyecto
echo "🔨 Construyendo proyecto..."
vite build -c vite.config.github.ts

# Crear .nojekyll
echo "📄 Creando .nojekyll..."
touch dist/.nojekyll

# Crear 404.html para SPA routing
echo "🔄 Configurando SPA routing..."
cp dist/index.html dist/404.html

echo ""
echo "✅ Build completado! Archivos generados en /dist"
echo ""
echo "📋 Próximos pasos para subir a GitHub Pages:"
echo "1. Crea un repositorio en GitHub llamado: tu-usuario.github.io"
echo "2. Ejecuta los siguientes comandos:"
echo "   git init"
echo "   git add ."
echo "   git commit -m \"Initial commit\""
echo "   git branch -M main"
echo "   git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git"
echo "   git push -u origin main"
echo ""
echo "🌐 Tu sitio estará disponible en: https://tu-usuario.github.io"