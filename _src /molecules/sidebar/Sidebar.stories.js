import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from '../modal/Modal.selectors.json'

import AButton from '../../atoms/button/Button.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import AModal from '../modal/Modal.vue'

const availableTransitions = [
  'fade',
  'slide-up',
  'slide-right',
  'slide-down',
  'slide-left'
]

const info = `
  <pre>⚠️ Sidebar is build on top of the <a href="/?path=/story/molecules-modal--default"><strong>Modal</strong></a> component.</pre><br>
  Check <strong>Knobs</strong> tab to edit component properties dynamically.<br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Molecules/Sidebar', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: {
      AButton,
      AParagraph,
      AModal
    },
    props: {
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      headingKnob: {
        default: text('Sidebar heading', 'Sidebar heading')
      },
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions, 'slide-left')
      }
    },
    data () {
      return {
        isVisible: false
      }
    },
    methods: {
      showSidebar () {
        this.isVisible = true
      },
      hideSidebar () {
        this.isVisible = false
      }
    },
    template: `
      <div>
        <a-button @click.native="showSidebar()">
          Sidebar button
        </a-button>
        <a-modal
          :heading="headingKnob"
          :visible="isVisible"
          :class="[
            'a-modal--full-height',
            classKnob !== 'a-modal--left' && 'a-modal--right',
            classKnob
          ]"
          modal-tag="aside"
          modal-role="complementary"
          :modal-content-transition="contentTransitionKnob"
          @close="hideSidebar()"
          close-button-aria-label="Close"
        >
          <a-paragraph>
            {{ contentKnob }}
          </a-paragraph>
        </a-modal>
      </div>
    `
  }))
