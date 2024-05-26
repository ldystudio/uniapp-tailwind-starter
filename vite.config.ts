import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
import uvtw from "@uni-helper/vite-plugin-uni-tailwind"

import postcssConfig from "./postcss.config"

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: postcssConfig
    },
    plugins: [uni(), uvtw()]
})
