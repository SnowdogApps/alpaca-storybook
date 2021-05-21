import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ARegister from './Register.vue'

storiesOf('Modules/Register', module)
  // @vue/component
  .add('Default', () => ({
    components: { ARegister },
    methods: {
      register: action('Register'),
      goToLogin: action('Login view')
    },
    template: `
      <a-register
        style="padding: 20px;"
        personal-information-legend="Personal information"
        sign-in-legend="Sign-In information"
        submit-button="Create an Account"
        go-to-login-button="or login to your account"
        @goToLogin="goToLogin"
        @register="register"
      />
    `
  }))
