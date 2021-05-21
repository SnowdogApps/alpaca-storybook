import { select, text } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Fieldset.selectors.json'

import AFieldset from './Fieldset.vue'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/Fieldset',
  component: AFieldset
}

export const Default = () => ({
  components: { AFieldset },
  props: {
    legendKnobs: {
      default: text('Legend', 'Legend text')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }
  },
  template: `
    <a-fieldset
      :legend-text="legendKnobs"
      :legendClass="classKnob"
    >
      <span>Fieldset content</span>
    </a-fieldset>
  `
})

export const LegendHidden = () => ({
  components: { AFieldset },
  props: {
    legendKnobs: {
      default: text('Legend', 'Legend text')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig, 'a-fieldset__legend--hidden')
    }
  },
  template: `
    <a-fieldset
      :legend-text="legendKnobs"
      :legendClass="classKnob"
    >
      <span>Fieldset content</span>
    </a-fieldset>
  `
})
