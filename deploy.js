#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Preparando deployment para GitHub Pages...\n');

try {
  // 1. Limpiar directorio dist
  console.log('📁 Limpiando directorio dist...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true });
  }

  // 2. Build del proyecto
  console.log('🔨 Construyendo proyecto...');
  execSync('vite build -c vite.config.github.ts', { stdio: 'inherit' });

  // 3. Crear CNAME si es necesario (para dominio personalizado)
  // Descomenta la siguiente línea si tienes un dominio personalizado
  // fs.writeFileSync(path.join('dist', 'CNAME'), 'tudominio.com');

  // 4. Crear .nojekyll para evitar problemas con archivos que empiezan con _
  fs.writeFileSync(path.join('dist', '.nojekyll'), '');

  // 5. Crear index.html en caso de 404 para SPA routing
  const indexPath = path.join('dist', 'index.html');
  const notFoundPath = path.join('dist', '404.html');
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
  }

  console.log('\n✅ Build completado! Archivos generados en /dist');
  console.log('\n📋 Próximos pasos para subir a GitHub Pages:');
  console.log('1. Crea un repositorio en GitHub llamado: tu-usuario.github.io');
  console.log('2. Ejecuta los siguientes comandos:');
  console.log('   git init');
  console.log('   git add .');
  console.log('   git commit -m "Initial commit"');
  console.log('   git branch -M main');
  console.log('   git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git');
  console.log('   git push -u origin main');
  console.log('\n🌐 Tu sitio estará disponible en: https://tu-usuario.github.io');

} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}