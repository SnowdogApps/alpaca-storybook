// @vue/component
export default {
  props: {
    /**
     * Action1 text
     */
    action1Text: {
      type: String,
      default: null
    },
    /**
     * Action2 text
     */
    action2Text: {
      type: String,
      default: null
    }
  },
  methods: {
    action1 (event) {
      /**
       * Event for action1
       * @type {Event}
       */
      this.$emit('action1', event)
    },
    action2 (event) {
      /**
       * Event for action2
       * @type {Event}
       */
      this.$emit('action2', event)
    }
  }
}
