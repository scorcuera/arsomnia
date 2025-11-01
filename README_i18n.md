# Guía de Internacionalización (i18n)

Tu portfolio ahora está disponible en **Español (ES)** y **Francés (FR)**.

## 📁 Estructura de archivos

```
src/
├── i18n/
│   ├── es.json          # Traducciones en español
│   ├── fr.json          # Traducciones en francés
│   └── utils.ts         # Utilidades para i18n
├── pages/
│   ├── index.astro      # Versión en español (por defecto)
│   └── fr/
│       └── index.astro  # Versión en francés
├── layouts/
│   └── Layout.astro     # Layout con soporte multiidioma
└── components/
    └── LanguageSelector.astro  # Selector de idioma
```

## 🌐 URLs

- **Español (por defecto)**: `https://tu-sitio.com/`
- **Francés**: `https://tu-sitio.com/fr/`

## ✏️ Cómo añadir o modificar traducciones

1. **Para español**: Edita `src/i18n/es.json`
2. **Para francés**: Edita `src/i18n/fr.json`

### Ejemplo de uso en componentes:

```astro
---
import { useTranslations } from '../i18n/utils';

const t = useTranslations('es'); // o 'fr'
---

<h1>{t('hero.title')}</h1>
<p>{t('hero.subtitle')}</p>
```

## 🎨 Selector de idioma

El selector de idioma aparece en la barra de navegación:
- **Desktop**: Icono de globo con dropdown
- **Móvil**: Se muestra a la izquierda del menú hamburguesa

## 🔄 Cómo añadir un nuevo idioma

1. Crea un nuevo archivo JSON en `src/i18n/` (ej: `en.json`)
2. Añade el idioma a `astro.config.mjs`:
   ```js
   i18n: {
     locales: ['es', 'fr', 'en'],
     ...
   }
   ```
3. Actualiza `src/i18n/utils.ts` para incluir el nuevo idioma
4. Crea la carpeta `src/pages/en/` y copia `index.astro`
5. Actualiza el componente para usar `useTranslations('en')`

## 📝 Notas importantes

- El español es el idioma por defecto (no lleva prefijo en la URL)
- Las traducciones se cargan automáticamente según la URL
- El selector de idioma persiste el diseño y estilos de la página
- Todos los textos dinámicos (formularios, mensajes de error, etc.) están traducidos

## 🚀 Testing

Para probar localmente:
```bash
npm run dev
```

Visita:
- `http://localhost:4321/` (Español)
- `http://localhost:4321/fr/` (Francés)

