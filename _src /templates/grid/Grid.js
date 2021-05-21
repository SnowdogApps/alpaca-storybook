export default {
  props: {
    /**
     * Array of cols
     */
    grids: {
      type: Array,
      required: true
    },
    /**
     * Custom class for row
     */
    rowClass: {
      type: String,
      default: null
    }
  }
}
