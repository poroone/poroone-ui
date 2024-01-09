/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-04 14:41:52
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-04 17:57:28
 * @FilePath: \poroone-ui\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
export default defineConfig({
    plugins: [
        vue(),

    ],
    
    build: {
        rollupOptions: {
            external: ["vue", "vue-router"],
            output: {
                globals: {
                    vue: "vue"
                }
            }
        },
        minify: false,//压缩
        lib: {
            entry:"./src/components/index.ts", //入口文件
            name:"PoUi", //输出名字
            fileName:"po-ui", 
            formats:["es","umd","iife"]
        }
    }
})