// @vue/component
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    clearButton: {
      type: String,
      required: true
    },
    singleFilterTag: {
      type: String,
      default: 'button'
    },
    closeIcon: {
      type: String,
      default: 'close'
    },
    closeIconTitle: {
      type: String,
      default: 'Close'
    }
  },
  methods: {
    clearAll () {
      this.$emit('clearAll')
    },
    clearItem () {
      this.$emit('clearItem')
    }
  }
}
