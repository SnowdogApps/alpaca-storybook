import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { object } from '@storybook/addon-knobs'

import AFooterMenu from './FooterMenu.vue'

import menu from '../../../mocks/footer-menu.json'

storiesOf('Molecules/Footer menu', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AFooterMenu },
    data: () => ({ menu }),
    props: {
      menuKnob: {
        default: object('Menu', menu)
      }
    },
    methods: {
      submit: action('Submitted')
    },
    template: `
      <a-footer-menu 
        :menu="menuKnob"
        collapse-icon-title="Collapse icon"
      />
    `
  }))
