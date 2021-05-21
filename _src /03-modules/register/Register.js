// @vue/component
export default {
  props: {
    personalInformationLegend: {
      type: String,
      required: true
    },
    signInLegend: {
      type: String,
      required: true
    },
    submitButton: {
      type: String,
      required: true
    },
    goToLoginButton: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      passwordConfirmation: null,
      newsletter: false
    }
  },
  methods: {
    register () {
      this.$emit('register', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        newsletter: this.newsletter
      })
    },
    goToLogin () {
      this.$emit('goToLogin')
    }
  }
}
