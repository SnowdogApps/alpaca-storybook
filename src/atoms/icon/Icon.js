import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  props: {
    /**
     * Icon id for aria-labelledby
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Icon title
     */
    title: {
      type: String,
      default: null
    },
    /**
     * Icon width
     */
    width: {
      type: String,
      default: '24'
    },
    /**
     * Icon height
     */
    height: {
      type: String,
      default: '24'
    },
    /**
     * Custom viewBox for icon
     */
    viewBox: {
      type: [String, Boolean],
      default: false
    }
  },
  data () {
    return {
      config: {
        base: {
          icon: [
            'block',
            'pointer-events-none',
            'transition-all', 'duration-200', 'ease-in-out'
          ]
        }
      }
    }
  },
  computed: {
    ariaId () {
      return this.id || (this.title && this.title.toLowerCase().replace(/ /g, '-'))
    }
  }
}
