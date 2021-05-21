// @vue/component
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    },
    briefInfo: {
      type: Object,
      required: true
    },
    gallery: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true
    },
    stockAlertMaxQty: {
      type: Number,
      default: 5
    },
    inStockAlertText: {
      type: String,
      default: 'In stock - only'
    },
    inStockAlertTextSuffix: {
      type: String,
      default: 'left'
    },
    inStockText: {
      type: String,
      default: 'In stock'
    },
    outOfStockText: {
      type: String,
      default: 'Out of stock'
    },
    addToCartText: {
      type: String,
      default: 'Add to cart'
    },
    relatedProductsLabel: {
      type: String,
      default: 'Related products'
    },
    featuredProductsLabel: {
      type: String,
      default: 'You may also like'
    },
    banner: {
      type: Array,
      default: () => []
    },
    bannerAlt: {
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
