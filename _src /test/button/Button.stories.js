import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Button.selectors.json'

import AButton from './Button.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Test/Button', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AButton },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      textKnobs: {
        default: text('Text', 'Button text')
      }
    },
    template: `
      <a-button :class="classKnobs">
        {{ textKnobs }}
      </a-button>
    `
  }))
