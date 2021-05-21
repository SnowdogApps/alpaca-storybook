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
     * Text for close button
     */
    closeButton: {
      type: String,
      default: null
    },
    /**
     * Aria label for close button
     */
    closeAriaLabel: {
      type: String,
      default: null
    },
    /**
     * Title for close icon
     */
    closeIconTitle: {
      type: String,
      default: null
    }
  },
  methods: {
    close () {
      const focusable = this.$el.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]')

      // after closing message box move focus on first focusable element on the page
      if (focusable.length) {
        const firstFocusable = [...focusable].find(el => el.offsetParent !== null)
        firstFocusable.focus()
      }

      /**
       * Triggered close button
       * @type {Event}
       */
      this.$emit('close')
    }
  }
}
