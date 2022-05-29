import Vue from 'vue'
import VueI18n from 'vue-i18n'

import VXE_RU from './langs/ru/vxe'
// import IVIEW_RU from 'view-design/dist/locale/ru-RU.js'

const messages = {
  ru_RU: {
    ...VXE_RU
    // ...IVIEW_RU
  }
}

Vue.use(VueI18n)
Vue.locale = () => {}

const i18n = new VueI18n({
  locale: 'ru_RU',
  messages
})

export default i18n
