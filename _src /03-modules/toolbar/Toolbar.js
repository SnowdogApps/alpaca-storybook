// @vue/component
export default {
  props: {
    showMode: {
      type: Boolean,
      default: false
    },
    showSorter: {
      type: Boolean,
      default: false
    },
    showLimit: {
      type: Boolean,
      default: false
    },
    showAmount: {
      type: Boolean,
      default: false
    },
    showPager: {
      type: Boolean,
      default: false
    },
    sortBy: {
      type: Object,
      default: null
    },
    limiter: {
      type: Object,
      default: null
    },
    pager: {
      type: Object,
      default: null
    },
    amount: {
      type: Object,
      default: null
    }
  },
  methods: {
    setCurrentPage (event) {
      this.$emit('updatePage', event)
    },
    listView (event) {
      this.$emit('listView', event)
    },
    gridView (event) {
      this.$emit('gridView', event)
    }
  }
}
