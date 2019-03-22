import { storiesOf } from '@storybook/vue'

import options from "./mocks/radio"

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaRadio from './Radio.vue'

storiesOf('Elements/Form/Radio', module)
  .add('Default', () => ({
    components: { App, AlpacaRadio },
    data() {
      return {
        options
      }
    },
    template: `
      <app>
        <alpaca-radio
          :legendId="options.legendId"
          :legend="options.legend"
          :options="options.options"
          :name="options.name"
        />
      </app>
    `
  }))
  .add('Square', () => ({
    components: { App, AlpacaRadio },
    data() {
      return {
        options
      }
    },
    template: `
      <app>
        <alpaca-radio
          square
          :legendId="options.legendId"
          :legend="options.legend"
          :options="options.options"
          :name="options.name"
        />
      </app>
    `
  }))
