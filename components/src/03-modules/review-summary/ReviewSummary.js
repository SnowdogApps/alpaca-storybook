import ALink from '../../atoms/link/Link.vue'
import AButton from '../../atoms/button/Button.vue'

// @vue/component
export default {
  components: {
    ALink,
    AButton
  },
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
