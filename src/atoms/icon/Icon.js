// @vue/component
export default {
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
  computed: {
    ariaId () {
      return this.id || (this.title && this.title.toLowerCase().replace(/ /g, '-'))
    }
  }
}
