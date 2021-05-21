// @vue/component
export default {
  inheritAttrs: false,
  props: {
    /**
     * Prop to handle v-model
     */
    value: {
      type: String,
      default: null
    },
    /**
     * Input id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
