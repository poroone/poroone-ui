/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-04 20:09:41
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-04 23:24:57
 * @FilePath: \poroone-ui\docs\.vitepress\config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'
import { demoBlockPlugin,demoblockVitePlugin } from "vitepress-theme-demoblock"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "poro的组件库",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Api 示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Button按钮', link: '/components/button/' },
          { text: '文本框', link: '/components/input/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/poroone' }
    ]
  },
  markdown:{
    config:(md)=>{
      md.use(demoBlockPlugin)
    }
  },
  vite:{
    plugins:[demoblockVitePlugin()]
  }
})
