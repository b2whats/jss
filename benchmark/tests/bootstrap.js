import {create} from 'jss'
import global from 'jss-global'

import styles from '../fixtures/bootstrap.json'

const jssWithoutGlobal = create()
const jssWithGlobal = create().use(global())
// Avoid memory leak with registry.
const options = {virtual: true}

suite('Bootstrap JSS to CSS', () => {
  benchmark('unnamed .toString()', () => {
    jssWithGlobal
      .createStyleSheet({'@global': styles}, options)
      .toString()
  })

  benchmark('named .toString()', () => {
    jssWithoutGlobal
      .createStyleSheet(styles, options)
      .toString()
  })
})
