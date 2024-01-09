import PoButton from "./button/index.vue"
import PoInput from "./input/index.vue"
import type { App } from "vue"
export { PoButton, PoInput }
console.log(PoButton.name)


export default {
    install(app: App) {
        app.component(PoButton.name as string, PoButton)
        app.component(PoInput.name as string, PoInput)
    }
}