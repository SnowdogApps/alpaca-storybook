import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaFooter from './Footer.vue'

import listElements from './mocks/listElements.json'
import dropdownListElements from './mocks/dropdownListElements.json'
import newsletter from './mocks/newsletter.json'

storiesOf('Modules/Footer', module).add('Default', () => ({
  components: { AlpacaFooter },
  data: () => ({
    listElements,
    dropdownListElements,
    newsletter
  }),
  template: `
      <alpaca-footer
       copyright-text="Copyright © 2019 Alpaca. All rights reserved."
       :input="newsletter.input"
       :checkboxes="newsletter.checkbox"
       social-list-subtitle="Find us on"
       heading="Sing up to our twisted newsletter"
       :social-menu="listElements"
       :menu="dropdownListElements"
       cookie-text="<a href='#' class='cookie-message__link'>Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings."
       @submitNewsletter="submit"
      />
  `,
  methods: {
    submit: action('Submitted')
  }
}))
