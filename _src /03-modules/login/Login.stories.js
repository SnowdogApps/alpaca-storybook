import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import ALogin from './Login.vue'

storiesOf('Modules/Login', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Default', () => ({
    components: { ALogin },
    methods: {
      login: action('Login'),
      goToRegister: action('Register view'),
      goToForgotPassword: action('Forgot password view')
    },
    template: `
      <a-login
        style="padding: 20px;"
        legend="Login form"
        go-to-forget-password-button="Forgot Your Password?"
        submit-button="Sign In"
        go-to-register-button="or register an account"
        @goToRegister="goToRegister"
        @goToForgotPassword="goToForgotPassword"
        @login="login"
      />
    `
  }))
