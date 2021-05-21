// @vue/component
export default {
  props: {
    /**
     * Heading text
     */
    heading: {
      type: String,
      default: null
    },
    /**
     * Input object
     */
    input: {
      type: Object,
      default: null
    },
    /**
     * Button text
     */
    buttonText: {
      type: String,
      default: null
    },
    /**
     * Checkbox object
     */
    checkbox: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      email: null
    }
  },
  methods: {
    onSubmit () {
      /**
       * Triggered when form is submit
       * @type { Event }
       */
      this.$emit('submit', {
        email: this.email,
        checkbox: this.checkbox.status
      })
    }
  }
}
