import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from './Header.vue'

import menu from './mocks/menu.json'

storiesOf('Modules/Header', module).add('Default', () => ({
  components: { App, AlpacaHeader },
  data: () => ({
    menu
  }),
  template: `
    <app>
      <alpaca-header 
        :menu="menu"
        src="../../images/logo/alpaca.svg"
        link="#"
      />
    </app>
  `
}))
