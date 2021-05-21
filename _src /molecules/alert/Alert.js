// @vue/component

export default {
  props: {
    /**
     * Visibility status
     */
    visible: {
      type: Boolean,
      default: true
    },
    /**
     * Aria label for close button
     */
    closeAriaLabel: {
      type: String,
      default: null
    },
    /**
     * Close icon title
     */
    closeIconTitle: {
      type: String,
      default: null
    }
  },
  methods: {
    close () {
      /**
       * Triggered close button
       * @type {Event}
       */
      this.$emit('close')
    }
  }
}
