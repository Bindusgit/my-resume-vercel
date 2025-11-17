// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // For Vercel deploy use root base. If you later deploy to GitHub Pages,
  // change this to your repo name like '/my-resume/'.
  base: '/',
  plugins: [react()],
})
