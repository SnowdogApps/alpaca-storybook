// @vue/component
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isSideMenuVisible: false
    }
  }
}
