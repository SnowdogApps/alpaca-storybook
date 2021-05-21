// @vue/component
export default {
  props: {
    products: {
      type: Array,
      required: true
    },
    heading: {
      type: String,
      required: false,
      default: 'Compare Products'
    },
    compareButton: {
      type: String,
      required: false,
      default: 'Compare'
    },
    clearAllButton: {
      type: String,
      required: false,
      default: 'Clear All'
    },
    comparePageUrl: {
      type: String,
      required: false,
      default: 'compare'
    },
    noProductsMessage: {
      type: String,
      required: false,
      default: 'You have no items to compare.'
    }
  },
  computed: {
    productsCount () {
      return this.products.length
    }
  },
  methods: {
    removeFromCompare () {
      this.$emit('removeFromCompare')
    },
    clearCompareList () {
      this.$emit('clearCompareList')
    }
  }
}
