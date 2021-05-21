// @vue/component
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default: null
    },
    heading: {
      type: String,
      default: null
    },
    titleTag: {
      type: String,
      default: 'h3'
    },
    iconClass: {
      type: String,
      default: null
    },
    iconWrapperClass: {
      type: String,
      default: null
    }
  }
}
