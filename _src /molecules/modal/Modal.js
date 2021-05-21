import KeyCodes from '../../utils/key-codes'

// @vue/component
export default {
  props: {
    /**
     * Modal heading text
     */
    heading: {
      type: String,
      default: null
    },
    /**
     * Modal visibility indicator
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * Indicate if clicking outside modal can emit `close` action
     */
    closeOnBackgroundClick: {
      type: Boolean,
      default: true
    },
    /**
     * Indicate if Esc key can emit `close` action
     */
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    /**
     * Modal wrapper html tag
     */
    modalTag: {
      type: String,
      default: 'div'
    },
    /**
     * Modal main transition effect name
     */
    modalMainTransition: {
      type: String,
      default: 'fade'
    },
    /**
     * Modal content transition effect name
     */
    modalContentTransition: {
      type: String,
      default: 'slide-down'
    },
    /**
     * Additional Modal content class
     */
    modalContentClass: {
      type: String,
      default: null
    },
    /**
     * Modal role
     */
    modalRole: {
      type: String,
      default: 'dialog'
    },
    /**
     * Modal aria-labelledby text
     */
    ariaLabelledby: {
      type: String,
      default: null
    },
    /**
     * Modal aria-describedby text
     */
    ariaDescribedby: {
      type: String,
      default: null
    },
    /**
     * Indicate if close button is available
     */
    closeButton: {
      type: Boolean,
      default: true
    },
    /**
     * Modal close button aria-label text
     */
    closeButtonAriaLabel: {
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
  data () {
    return {
      trigger: null
    }
  },
  computed: {
    ariaHidden () {
      return this.visible ? 'false' : 'true'
    }
  },
  watch: {
    visible (val) {
      if (val && typeof window !== 'undefined') {
        this.trigger = document.activeElement
        this.$nextTick(() => this.$refs.modal.focus())
      }
    }
  },
  methods: {
    close () {
      /**
       * Trigger close action
       * @type {Event}
       */
      this.$emit('close')

      if (this.trigger) {
        this.$nextTick(() => this.trigger.focus())
      }
    },
    handleBackgroundClick () {
      if (this.closeOnBackgroundClick) {
        this.close()
      }
    },
    handleKeydown (event) {
      if (this.visible) {
        switch (event.keyCode) {
          case KeyCodes.ESC:
            if (this.closeOnEsc) {
              this.close()
            }
            break
          case KeyCodes.TAB:
            this.setFocusTrap(event)
            break
        }
      }
    },
    setFocusTrap (event) {
      const focusable =
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]'
      const focusableChildren = Array.from(this.$el.querySelectorAll(focusable))

      const currentFocus = document.activeElement
      const totalOfFocusable = focusableChildren.length
      const focusedIndex = focusableChildren.indexOf(currentFocus)

      if (event.shiftKey && focusedIndex <= 0) {
        event.preventDefault()
        focusableChildren[totalOfFocusable - 1].focus()
      } else if (focusedIndex === totalOfFocusable - 1) {
        event.preventDefault()
        focusableChildren[0].focus()
      }
    }
  }
}
