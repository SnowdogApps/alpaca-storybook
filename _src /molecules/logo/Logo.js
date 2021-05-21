// @vue/component
export default {
  props: {
    /**
     * Redirect link
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Src for logo
     */
    src: {
      type: String,
      default: null
    },
    /**
     * Alt for logo
     */
    alt: {
      type: String,
      default: null
    }
  }
}
