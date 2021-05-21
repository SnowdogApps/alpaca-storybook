import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ANewsletter from './Newsletter.vue'

storiesOf('Molecules/Newsletter', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ANewsletter },
    data: () => ({
      checkbox: {
        status: true,
        name: 'newsletter',
        id: 'newsletter-agreement',
        value: 'newsletter-agreement-value',
        label: 'I agree to Terms and conditions and I am happy to receive your newsletter with all your promotions.'
      },
      input: {
        placeholder: 'Enter your email address',
        id: 'newsletter-id',
        name: 'newsletter-email',
        label: 'Email'
      }
    }),
    methods: {
      exampleMethod: action('Clicked button')
    },
    template: `
      <div style="background: #393243; padding: 0 10px;">
        <a-newsletter
          :input="input"
          :checkbox="checkbox"
          heading="Sing up to our twisted newsletter"
          button-text="Submit"
          @submit="exampleMethod"
        />
      </div>
    `
  }))
