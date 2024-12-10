import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/<имя_репозитория>/', // Замените <имя_репозитория> на название вашего репозитория
  plugins: [vue()]
});
