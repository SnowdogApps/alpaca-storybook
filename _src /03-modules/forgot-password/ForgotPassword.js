// @vue/component
export default {
  props: {
    info: {
      type: String,
      required: true
    },
    submitButton: {
      type: String,
      required: true
    },
    returnButton: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      email: null
    }
  },
  methods: {
    submit () {
      this.$emit('submit', { email: this.email })
    },
    goToLogin () {
      this.$emit('goToLogin')
    }
  }
}
