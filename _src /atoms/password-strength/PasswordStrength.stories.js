import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './PasswordStrength.selectors.json'

import APasswordStrength from './PasswordStrength.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/PasswordStrength', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { APasswordStrength },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      textKnobs: {
        default: text('Content', 'No password')
      },
      labelKnobs: {
        default: text('Label', 'Passworf strength')
      }
    },
    template: `
      <a-password-strength
        :class="classKnobs"
        :label="labelKnobs"
      >
        {{ textKnobs }}
      </a-password-strength>
    `
  }))
