// @vue/component
export default {
  props: {
    menu: {
      type: Array,
      required: true
    },
    sideMenu: {
      type: Array,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleMicrocart () {
      this.$emit('toggleMicrocart')
    },
    toggleWishlist () {
      this.$emit('toggleWishlist')
    },
    goToAccount () {
      this.$emit('goToAccount')
    }
  }
}
