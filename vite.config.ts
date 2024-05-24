import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from "postcss-pxtorem";
import autoprefixer from 'autoprefixer';
// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
        // 此代码为适配移动端px2rem
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 16, // 1rem的大小（控制1rem的大小  点位：px）
                    propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
                }),
                autoprefixer()
            ],
        },
    }
})
