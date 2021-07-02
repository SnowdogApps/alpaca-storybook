import { alpacaUIMixin } from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * To use another tag instead of `li`
     */
    tag: {
      type: String,
      default: 'li'
    }
  },
  config: {
    base: {
      'list-item': [
        'p-2'
      ]
    }
  }
}
