import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './RadioWrapper.selectors.json'

import ARadioWrapper from './RadioWrapper.vue'
import ARadio from '../radio/Radio.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Molecules/Radio Wrapper', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ARadio, ARadioWrapper },
    data () {
      return {
        selected: ''
      }
    },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <a-radio-wrapper
        legend-text="Radio legend"
        :class="classKnobs"
      >
        <a-radio
          id="id-1"
          value="option_one"
          name="radio"
          v-model="selected"
        >
          Option one
        </a-radio>
        <a-radio
          id="id-2"
          value="option_two"
          name="radio"
          v-model="selected"
        >
          Option two
        </a-radio>
        <a-radio
          id="id-3"
          value="option_three"
          name="radio"
          v-model="selected"
        >
          Option three
        </a-radio>
      </a-radio-wrapper>
    `
  }))
