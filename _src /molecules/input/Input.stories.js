import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Input.selectors.json'

import AInput from './Input.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconPerson from '../../atoms/icon/templates/IconPerson.vue'

const inputTypes = ['text', 'email', 'search', 'number', 'password', 'hidden']

const info = `
  Check **Knobs** tab to edit component properties dynamically.<br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Molecules/Input', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AInput },
    data: () => {
      return {
        value: ''
      }
    },
    props: {
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      placeholderKnob: {
        default: text('Placeholder', 'First and last name')
      },
      labelKnob: {
        default: text('Label', 'Label')
      },
      typeKnob: {
        default: select('Type', inputTypes, 'text')
      }
    },
    template: `
      <a-input
        :class="classKnob"
        v-model="value"
        :type="typeKnob"
        :label="labelKnob"
        :placeholder="placeholderKnob"
        id="input-id"
      />
    `
  }))
  .add('With slot', () => ({
    components: { AInput, AIcon, AIconPerson },
    data: () => {
      return {
        value: '',
        iconStyles: {
          position: 'absolute',
          top: '29px',
          right: '8px',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          width: '40px',
          height: '40px',
          cursor: 'pointer'
        }
      }
    },
    props: {
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      placeholderKnob: {
        default: text('Placeholder', 'First and last name')
      },
      labelKnob: {
        default: text('Label', 'Label')
      },
      typeKnob: {
        default: select('Type', inputTypes, 'text')
      }
    },
    methods: {
      click: action('Clicked')
    },
    template: `
      <a-input
        :class="classKnob"
        v-model="value"
        :label="labelKnob"
        :type="typeKnob"
        :placeholder="placeholderKnob"
        id="input-id"
      >
        <template #icon>
          <div :style="iconStyles">
            <a-icon
              title="Person icon"
              @click.native="click"
            >
              <a-icon-person />
            </a-icon>
          </div>
        </template>
      </a-input>
    `
  }))
