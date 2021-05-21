// @vue/component
export default {
  props: {
    picture: {
      type: Array,
      default: () => []
    },
    pictureAlt: {
      type: String,
      default: ''
    },
    firstColumnText: {
      type: String,
      default: ''
    },
    secondColumnText: {
      type: String,
      default: ''
    }
  }
}
