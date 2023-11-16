import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@/assets/css/main.scss'


export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        display: {
            mobileBreakpoint: 'sm',
                thresholds: {
                    xs: 0,
                    sm: 340,
                    md: 540,
                    lg: 800,
                    xl: 1280,
                },
            },
        ssr: true,
        components,
        directives,
    })
    app.vueApp.use(vuetify).mount('#app')
})


