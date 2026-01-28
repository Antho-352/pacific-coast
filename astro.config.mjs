// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  
  output: 'static', // <--- On force la génération de fichiers HTML
  
  integrations: [sitemap()],

  // On ajoute le site URL pour que le sitemap fonctionne correctement
  site: 'https://honda-pacific-coast.fr' 
});
