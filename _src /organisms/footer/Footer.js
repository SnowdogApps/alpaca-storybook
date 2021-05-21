// @vue/component
export default {
  props: {
    /**
     * Array with menu
     */
    menu: {
      type: Array,
      default: null
    },
    /**
     * Copyright text
     */
    copyrightText: {
      type: String,
      default: null
    },
    /**
     * Title for social media list
     */
    socialListSubtitle: {
      type: String,
      default: null
    },
    /**
     * Array with social media
     */
    socialList: {
      type: Array,
      default: null
    },
    /**
     * Cookie text
     */
    cookieMessage: {
      type: Object,
      default: null
    },
    /**
     * Heading
     */
    heading: {
      type: String,
      default: null
    },
    /**
     * Input object
     */
    input: {
      type: Object,
      default: null
    },
    /**
     * Array with checkboxes
     */
    checkbox: {
      type: Object,
      default: null
    },
    /**
     * Aria label for scroll
     */
    scrollAriaLabel: {
      type: String,
      default: null
    },
    /**
     * Title for scroll-up icon
     */
    scrollUpIconTitle: {
      type: String,
      default: null
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    submitNewsletter (payload) {
      /**
       * Submit newsletter event
       * @type { Event }
       */
      this.$emit('submitNewsletter', payload)
    },
    closeCookieMessage () {
      /**
       * Close Cookie Message event
       * @type { Event }
       */
      this.$emit('closeCookieMessage')
    }
  }
}
