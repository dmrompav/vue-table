import i18n from './../i18n/index.js'

import {
  VXETable,
  Filter,
  Header,
  Column,
  Toolbar,
  Table
} from 'vxe-table'

VXETable.setup({
  i18n: (key, args) => i18n.t(key, args)
})

export default {
  install (Vue) {
    Vue
      .use(Header)
      .use(Filter)
      .use(Column)
      .use(Toolbar)
      .use(Table)
  }
}
