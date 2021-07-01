// @vue/component
export default {
  props: {
    /**
     * Tab name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Selected tab
     */
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: this.selected
    }
  },
  computed: {
    id () {
      return this.name.toLowerCase().replace(/ /g, '-')
    }
  }
}
