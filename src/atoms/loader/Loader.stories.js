import { select } from '@storybook/addon-knobs'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Loader.selectors.json'

import ALoader from './Loader.vue'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/Loader',
  component: ALoader
}

export const Default = () => ({
  components: { ALoader },
  props: {
    classKnobs: {
      default: select('BEM Modifier', classKnobsConfig, 'a-loader--visible')
    }
  },
  template: `
    <a-loader
      :class="classKnobs"
      aria-label="Do not refresh the page"
    />
  `
})
