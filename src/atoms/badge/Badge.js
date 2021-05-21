import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  props: {
    /**
     * To use another tag instead of `div`
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  data () {
    return {
      config: {
        base: {
          badge: [
            'inline-flex', 'justify-center',
            'px-3',
            'font-bold', 'text-xs', 'leading-snug', 'uppercase'
          ]
        },
        primary: {
          badge: [
            'text-white', 'bg-black'
          ]
        },
        secondary: {
          badge: [
            'text-primary', 'bg-white'
          ]
        }
      }
    }
  }
}
