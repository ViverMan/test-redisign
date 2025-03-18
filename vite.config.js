import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
    plugins: [injectHTML()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./scss/base/vars.scss"; 
                @use "./scss/base/base.scss"; 
                @use "./scss/base/reset.scss";
                @use "./scss/base/containers.scss";`,
            },
        },
    },
    base: "/test-redisign/",
})