import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 修改 base 為你的 GitHub repo 名稱（部署到 GitHub Pages 時必須設定）
export default defineConfig({
  plugins: [react()],
  base: '/Naride-globalprocure/', 
})
