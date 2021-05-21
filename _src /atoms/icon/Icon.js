// @vue/component
export default {
  props: {
    /**
     * Icon title
     */
    title: {
      type: String,
      default: null
    },
    /**
     * Icon role
     */
    role: {
      type: String,
      default: 'img'
    },
    /**
     * Icon viewBox
     */
    viewBox: {
      type: [String, Boolean],
      default: '0 0 24 24'
    }
  },
  computed: {
    id () {
      return this.title ? this.title.toLowerCase().replace(/ /g, '-') : ''
    }
  }
}
