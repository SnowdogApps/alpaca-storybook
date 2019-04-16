import ALabel from '../../atoms/label/Label.vue'

// @vue/component
export default {
  components: {
    ALabel
  },
  props: {
    /**
     * Id attribute for select and label
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Name attribute
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Array of options
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Value of selected option (used with v-model)
     */
    value: {
      type: [String, Number],
      default: null
    },
    /**
     * Select custom class
     */
    selectClass: {
      type: String,
      default: null
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Default option text
     */
    defaultOption: {
      type: String,
      default: null
    }
  }
}
