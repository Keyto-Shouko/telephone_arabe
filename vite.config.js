import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Telephone Arabe',
      orientation: "any",
      short_name: 'Telephone Arabe',
      description: 'A super mini game',
      theme_color: '##c49129',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })],
})
