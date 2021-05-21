// @vue/component
export default {
  props: {
    removeButton: {
      type: String,
      default: null
    }
  },
  methods: {
    onRemove (val) {
      this.$emit('remove', val)
    }
  }
}
