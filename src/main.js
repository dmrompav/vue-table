import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'
import store from './plugins/vuex'

import ViewUI from './plugins/iview'
import 'view-design/dist/styles/iview.css'
import IVIEW_RU from 'view-design/dist/locale/ru-RU'

import 'xe-utils'
import VxeTable from './plugins/vxe'
import 'vxe-table/lib/style.css'

Vue.use(Vuex)
Vue.use(ViewUI, { IVIEW_RU })
Vue.use(VxeTable)

Vue.config.productionTip = false

/**
 * APP
 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store(),
  components: { App },
  template: '<App/>'
})
