// @vue/component
export default {
  props: {
    tabId: {
      type: String,
      required: true
    },
    titleId: {
      type: String,
      required: true
    },
    activeTab: {
      type: String,
      default: null
    }
  }
}
