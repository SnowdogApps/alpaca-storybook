// @vue/component
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    select (val) {
      this.$emit('select', val)
    }
  }
}
