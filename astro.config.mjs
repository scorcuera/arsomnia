// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://arsomnia.dev',
    base: '/',
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'fr'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
