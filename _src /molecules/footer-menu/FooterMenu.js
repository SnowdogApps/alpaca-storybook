// @vue/component
export default {
  props: {
    /**
     * Array with menu
     */
    menu: {
      type: Array,
      default: null
    },
    /**
     * Collapse icon title
     */
    collapseIconTitle: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      isLargeScreen: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      const breakpoint = window.matchMedia('(min-width: 768px)')
      this.checkMedia(breakpoint)
      breakpoint.addListener(this.checkMedia)
    })
  },
  methods: {
    checkMedia (e) {
      this.isLargeScreen = e.matches
    }
  }
}
