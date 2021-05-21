// @vue/component
export default {
  props: {
    reviewsQty: {
      type: Number,
      required: true
    },
    addReviewLink: {
      type: String,
      required: true
    },
    amountLink: {
      type: String,
      default: null
    }
  }
}
