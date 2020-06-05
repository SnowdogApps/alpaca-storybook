import { storiesOf } from '@storybook/vue'

import AHeading from './Heading.vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Heading.selectors.json'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically. All HTML six levels of headings are available.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`
const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

const levels = [1, 2, 3, 4, 5, 6]

storiesOf('Atoms/Heading', module)
  .addParameters({ info })
  .add('First', () => ({
    components: { AHeading },
    props: {
      levelKnobs: {
        default: select('Heading level', levels, 1)
      },
      tagKnobs: {
        default: text('Tag', null)
      },
      textKnobs: {
        default: text('Text', 'Heading level 1')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <a-heading
        :level="levelKnobs"
        :tag="tagKnobs"
        :class="classKnob"
      >
        {{ textKnobs }}
      </a-heading>
    `
  }))
  .add('Second', () => ({
    components: { AHeading },
    props: {
      levelKnobs: {
        default: select('Heading level', levels, 2)
      },
      tagKnobs: {
        default: text('Tag', null)
      },
      textKnobs: {
        default: text('Text', 'Heading level 2')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }

    },
    template: `
      <a-heading
        :level="levelKnobs"
        :tag="tagKnobs"
        :class="classKnob"
      >
        {{ textKnobs }}
      </a-heading>
    `
  }))
  .add('Third', () => ({
    components: { AHeading },
    props: {
      levelKnobs: {
        default: select('Heading level', levels, 3)
      },
      tagKnobs: {
        default: text('Tag', null)
      },
      textKnobs: {
        default: text('Text', 'Heading level 3')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }

    },
    template: `
      <a-heading
        :level="levelKnobs"
        :tag="tagKnobs"
        :class="classKnob"
      >
        {{ textKnobs }}
      </a-heading>
    `
  }))
  .add('Fourth', () => ({
    components: { AHeading },
    props: {
      levelKnobs: {
        default: select('Heading level', levels, 4)
      },
      tagKnobs: {
        default: text('Tag', null)
      },
      textKnobs: {
        default: text('Text', 'Heading level 4')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }

    },
    template: `
      <a-heading
        :level="levelKnobs"
        :tag="tagKnobs"
        :class="classKnob"
      >
        {{ textKnobs }}
      </a-heading>
    `
  }))
  .add('Fifth', () => ({
    components: { AHeading },
    props: {
      levelKnobs: {
        default: select('Heading level', levels, 5)
      },
      tagKnobs: {
        default: text('Tag', null)
      },
      textKnobs: {
        default: text('Text', 'Heading level 5')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }

    },
    template: `
      <a-heading
        :level="levelKnobs"
        :tag="tagKnobs"
        :class="classKnob"
      >
        {{ textKnobs }}
      </a-heading>
    `
  }))
  .add('Sixth', () => ({
    components: { AHeading },
    props: {
      levelKnobs: {
        default: select('Heading level', levels, 6)
      },
      tagKnobs: {
        default: text('Tag', null)
      },
      textKnobs: {
        default: text('Text', 'Heading level 6')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }

    },
    template: `
      <a-heading
        :level="levelKnobs"
        :tag="tagKnobs"
        :class="classKnob"
      >
        {{ textKnobs }}
      </a-heading>
    `
  }))
