import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// chargement des variables d'environnement 
dotenv.config({path: './variables.env'})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
