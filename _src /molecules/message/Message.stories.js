import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Message.selectors.json'

import AMessage from './Message.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

const defaultData = {
  components: { AMessage },
  methods: {
    onClick: action('Action clicked')
  }
}

storiesOf('Molecules/Message', module)
  .addParameters({ info })
  .add('Default', () => ({
    ...defaultData,
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <a-message
        action1-text="Ok"
        @action1="onClick"
        :class="classKnobs"
      >
        Product has been added to the cart!
      </a-message>
    `
  }))
  .add('With slot', () => ({
    ...defaultData,
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <a-message :class="classKnobs">
        Product has been added to the cart!
        <template #actions>
          <button
            style="
              margin: 15px 0;
              color: white;
              background: none;
              border: none;
              cursor: pointer;
            "
            @click="onClick"
          >
            Ok
          </button>
        </template>
      </a-message>
    `
  }))
