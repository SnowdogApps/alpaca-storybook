import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AForgotPassword from './ForgotPassword.vue'

storiesOf('Modules/Forgot Password', module)
  // @vue/component
  .add('Default', () => ({
    components: { AForgotPassword },
    methods: {
      resetPassword: action('Reset password'),
      goToLogin: action('Login view')
    },
    template: `
      <a-forgot-password
        style="padding: 20px;"
        info="Please enter your email address below to receive a password reset link."
        submit-button="Reset my password"
        return-button="or return to log in"
        @goToLogin="goToLogin"
        @submit="resetPassword"
      />
    `
  }))
