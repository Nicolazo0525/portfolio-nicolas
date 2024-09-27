/* import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}) */
/* Local */
/* import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//https://vitejs.dev/config/
 export default defineConfig({
  plugins: [vue()],
  server:{
    port:3000
  }
})  */
/* Github Pages */
/* import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: 'https://nicolazo0525.github.io/portfolio-nicolas/',
  base: '/portfolio-nicolas/',
}) */

/* Vervel */
/* import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: 'https://nicolazo0525.github.io/portfolio-nicolas/',
  base: 'https://portfolio-nicolas-ashen.vercel.app',
})
 */

/* Netlify */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'https://portfolio-nicolas-ramos.netlify.app/',
})
