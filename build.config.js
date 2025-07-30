
#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';

async function buildForGitHub() {
  console.log('🚀 Building for GitHub Pages without Vite...');
  
  // Create dist directory
  await fs.ensureDir('dist');
  
  // Copy client files
  console.log('📁 Copying client files...');
  await fs.copy('client', 'dist', {
    filter: (src) => {
      // Skip node_modules and other unnecessary files
      return !src.includes('node_modules') && !src.includes('.git');
    }
  });
  
  // Create .nojekyll for GitHub Pages
  console.log('📄 Creating .nojekyll...');
  await fs.writeFile('dist/.nojekyll', '');
  
  // Create 404.html for SPA routing
  console.log('🔄 Setting up SPA routing...');
  const indexContent = await fs.readFile('dist/index.html', 'utf8');
  await fs.writeFile('dist/404.html', indexContent);
  
  // Update index.html to work with GitHub Pages
  console.log('⚙️ Updating index.html...');
  const updatedIndex = indexContent.replace(
    'src="/src/main.tsx"',
    'src="./src/main.tsx"'
  );
  await fs.writeFile('dist/index.html', updatedIndex);
  
  console.log('✅ Build completed! Files are in /dist directory');
}

buildForGitHub().catch(console.error);
