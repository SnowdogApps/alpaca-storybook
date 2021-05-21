// @vue/component
export default {
  props: {
    resultText: {
      type: String,
      required: true
    },
    resultTyped: {
      type: String,
      required: true
    },
    noResultText: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    manufacturers: {
      type: Array,
      required: true
    },
    isNoResult: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    seeAll () {
      this.$emit('seeAll')
    },
    showItems (items) {
      return items + ' item(s)'
    }
  }
}
