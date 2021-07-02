import { alpacaUIMixin } from '../../../utils/helpers/alpaca-ui.js'

export default {
  mixins: [alpacaUIMixin],
  props: {
    /**
     * To use another tag instead of `ul`
     */
    tag: {
      type: String,
      default: 'ul'
    }
  },
  config: {
    base: {
      list: [
        'list-none',
        'text-primary'
      ]
    },
    native: {
      list: [
        'list-disc'
      ]
    },
    horizontal: {
      list: [
        'flex', 'flex-row', 'flex-wrap'
      ]
    },
    centered: {
      list: [
        'justify-center',
        'text-center'
      ]
    },
    divided: {
      list: [
        'divide-y', 'divide-dark'
      ]
    },
    'divided-horizontal': {
      list: [
        'flex', 'flex-row', 'flex-wrap',
        'divide-x', 'divide-dark'
      ]
    }
  }
}
