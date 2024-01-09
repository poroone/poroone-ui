import DefaultTheme from "vitepress/theme"
import PoUi from "../../../src/components/index"
import "vitepress-theme-demoblock/dist/theme/styles/index.css"

import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue"
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue"
console.log(PoUi)
// import './styles'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(PoUi)
        app.component("Demo", Demo)
        app.component("DemoBlock", DemoBlock)
    }
}