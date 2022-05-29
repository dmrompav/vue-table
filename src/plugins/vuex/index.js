import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Modules from './modules'

const persisted = createPersistedState({
  // paths: [

  // ]
})

export default () => new Vuex.Store({
  modules: {
    ...Modules
  },
  plugins: [
    persisted
  ]
})
