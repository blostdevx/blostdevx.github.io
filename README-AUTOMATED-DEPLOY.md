# 🚀 Deployment Automático a GitHub Pages

¡Tu portfolio ahora se despliega automáticamente! Cada vez que hagas cambios, GitHub Pages se actualiza solo.

## ✅ Lo que se configuró

- **GitHub Actions**: Workflow automático para build y deploy
- **Trigger**: Se ejecuta automáticamente en cada push a `main`
- **Build optimizado**: Usa la configuración específica para GitHub Pages
- **Deploy directo**: Sube automáticamente a tu dominio `.github.io`

## 📋 Instrucciones paso a paso

### 1. Subir código a GitHub

```bash
# En tu computadora, crea una carpeta para el proyecto
mkdir mi-portfolio
cd mi-portfolio

# Inicializar Git
git init

# Agregar archivos (copia TODOS los archivos del proyecto de Replit)
git add .

# Primer commit
git commit -m "Initial portfolio setup"

# Conectar con GitHub (reemplaza con tu usuario)
git remote add origin https://github.com/blostdevx/blostdevx.github.io.git

# Subir código
git push -u origin main
```

### 2. Configurar GitHub Pages

1. **Ve a tu repositorio** en GitHub
2. **Settings** → **Pages**
3. **Source**: Selecciona "GitHub Actions"
4. **¡Listo!** El workflow se ejecutará automáticamente

### 3. Verificar deployment

1. **Ve a la pestaña "Actions"** en tu repositorio
2. **Verás el workflow** "Deploy to GitHub Pages" ejecutándose
3. **Cuando termine** (círculo verde ✅), tu sitio estará listo
4. **URL**: `https://blostdevx.github.io`

## 🔄 Actualizaciones futuras

Para actualizar tu portfolio:

```bash
# Hacer cambios en tu código
# Luego:
git add .
git commit -m "Actualizar portfolio"
git push
```

**¡Y listo!** GitHub Actions automáticamente:
- Construye tu proyecto
- Optimiza los archivos
- Despliega a GitHub Pages
- Tu sitio se actualiza en 2-3 minutos

## 📁 Archivos del workflow

- `.github/workflows/deploy.yml` - Configuración del deployment automático
- `vite.config.github.ts` - Configuración de build para GitHub Pages

## 🎯 Ventajas del deployment automático

- ✅ **Sin comandos manuales**: Solo push y listo
- ✅ **Build optimizado**: Compresión automática de archivos
- ✅ **Historial**: GitHub guarda todas las versiones
- ✅ **Rollback fácil**: Puedes volver a versiones anteriores
- ✅ **Certificado SSL**: HTTPS automático

## ⚠️ Solución de problemas

**Si el workflow falla:**

1. **Ve a Actions** en GitHub
2. **Haz clic en el workflow fallido**
3. **Revisa los logs** para ver el error
4. **Errores comunes**:
   - Archivos faltantes
   - Errores de sintaxis en el código
   - Dependencias no instaladas

**Si el sitio no carga:**

1. **Verifica que GitHub Pages** esté configurado como "GitHub Actions"
2. **Espera 5-10 minutos** tras el deploy exitoso
3. **Revisa la URL**: debe ser `https://tu-usuario.github.io`

¡Tu portfolio cyberpunk ahora se mantiene actualizado automáticamente! 🎉