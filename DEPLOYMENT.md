# 🚀 Guía de Deployment a GitHub Pages

Esta guía te ayudará a subir tu portfolio cyberpunk a GitHub Pages paso a paso.

## 📋 Requisitos Previos

1. **Cuenta de GitHub**: Necesitas una cuenta en [GitHub](https://github.com)
2. **Git instalado**: Verifica con `git --version`
3. **Node.js instalado**: Verifica con `node --version`

## 🛠️ Pasos para el Deployment

### Opción 1: Script Automático (Recomendado)

```bash
# Ejecutar el script de deployment
./deploy.sh
```

### Opción 2: Comandos manuales

```bash
# 1. Construir el proyecto para producción
vite build -c vite.config.github.ts

# 2. Crear archivos necesarios
touch dist/.nojekyll
cp dist/index.html dist/404.html
```

## 🌐 Configuración en GitHub

### Para repositorio principal (tu-usuario.github.io)

1. **Crear repositorio**:
   - Ve a [GitHub](https://github.com)
   - Crea un nuevo repositorio llamado exactamente: `tu-usuario.github.io`
   - Ejemplo: si tu usuario es `blostdevx`, el repo debe ser `blostdevx.github.io`

2. **Subir archivos**:
   ```bash
   # Navegar a la carpeta dist
   cd dist
   
   # Inicializar Git
   git init
   
   # Añadir todos los archivos
   git add .
   
   # Hacer commit inicial
   git commit -m "Deploy portfolio cyberpunk"
   
   # Configurar rama principal
   git branch -M main
   
   # Conectar con GitHub (reemplaza TU-USUARIO)
   git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
   
   # Subir archivos
   git push -u origin main
   ```

3. **Tu sitio estará disponible en**: `https://tu-usuario.github.io`

### Para repositorio con nombre personalizado

Si prefieres usar un nombre diferente para tu repositorio:

1. **Crear repositorio** con cualquier nombre (ej: `portfolio-cyberpunk`)

2. **Modificar configuración**:
   - Edita `vite.config.github.ts`
   - Cambia `base: '/'` por `base: '/nombre-del-repo/'`

3. **Configurar GitHub Pages**:
   - Ve a Settings → Pages en tu repositorio
   - Selecciona Source: "Deploy from a branch"
   - Selecciona Branch: "main" y folder: "/ (root)"

4. **Tu sitio estará disponible en**: `https://tu-usuario.github.io/nombre-del-repo`

## 🔧 Configuración de Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. **Crear archivo CNAME**:
   ```bash
   echo "tudominio.com" > dist/CNAME
   ```

2. **Configurar DNS**:
   - Crea un registro CNAME que apunte a `tu-usuario.github.io`
   - O registros A que apunten a las IPs de GitHub Pages

3. **Configurar en GitHub**:
   - Ve a Settings → Pages
   - En "Custom domain" escribe tu dominio
   - Habilita "Enforce HTTPS"

## 📁 Estructura de Archivos Generados

```
dist/
├── index.html          # Página principal
├── 404.html           # Página de error (copia de index.html para SPA)
├── .nojekyll          # Evita procesamiento Jekyll
├── assets/            # CSS, JS y otros recursos
│   ├── index-xxx.js   # JavaScript compilado
│   ├── index-xxx.css  # CSS compilado
│   └── ...
└── CNAME              # Dominio personalizado (opcional)
```

## 🔄 Actualizaciones Futuras

Para actualizar tu sitio:

```bash
# 1. Hacer cambios en tu código
# 2. Construir nueva versión
./deploy.sh

# 3. Actualizar en GitHub
cd dist
git add .
git commit -m "Update portfolio"
git push
```

## ⚠️ Problemas Comunes

### 1. **Página en blanco**
- Verifica que `base` en `vite.config.github.ts` sea correcto
- Para repo principal: `base: '/'`
- Para repo con nombre: `base: '/nombre-repo/'`

### 2. **Rutas no funcionan (404)**
- El archivo `404.html` debe ser copia exacta de `index.html`
- Esto permite que el router de React maneje las rutas

### 3. **Archivos no cargan**
- Verifica que `.nojekyll` esté presente
- Esto evita que GitHub ignore archivos que empiezan con `_`

### 4. **No se actualiza el sitio**
- GitHub Pages puede tardar hasta 10 minutos en actualizarse
- Verifica en Settings → Pages que esté configurado correctamente

## 🎯 Comandos Útiles

```bash
# Ver estado del repositorio
git status

# Ver historial de commits
git log --oneline

# Forzar actualización (cuidado, sobrescribe)
git push --force

# Clonar tu repositorio en otra máquina
git clone https://github.com/tu-usuario/tu-usuario.github.io.git
```

## 🌟 Tips Adicionales

- **Performance**: Los archivos se comprimen automáticamente
- **SEO**: Todas las páginas tienen meta tags configurados
- **Responsive**: El diseño funciona en móviles y desktop
- **Dark Mode**: Funciona sin problemas en GitHub Pages

¡Tu portfolio cyberpunk estará listo para impresionar a reclutadores! 🚀