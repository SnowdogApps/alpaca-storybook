import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './List.selectors.json'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'
import AIcon from '../icon/Icon.vue'
import AIconPerson from '../icon/templates/IconPerson.vue'
import AIconCheck from '../icon/templates/IconCheck.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/List', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: {
      AList,
      AListItem
    },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <a-list :class="classKnobs">
        <a-list-item>
          Lorem ipsum
        </a-list-item>
        <a-list-item>
          Lorem ipsum
        </a-list-item>
        <a-list-item>
          Lorem ipsum
        </a-list-item>
      </a-list>
    `
  }))
  .add('With slots', () => ({
    components: {
      AList,
      AListItem,
      AIcon,
      AIconPerson,
      AIconCheck
    },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <a-list :class="classKnobs">
        <a-list-item>
          <a-icon title="Account icon">
            <a-icon-person />
          </a-icon>
        </a-list-item>
        <a-list-item>
          <a-icon title="Check icon">
            <a-icon-check />
          </a-icon>
        </a-list-item>
        <a-list-item>
          <a-icon title="Account icon">
            <a-icon-person />
          </a-icon>
        </a-list-item>
      </a-list>
    `
  }))
