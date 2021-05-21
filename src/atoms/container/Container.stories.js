import { text } from '@storybook/addon-knobs'

import AContainer from './Container.vue'

export default {
  title: 'Atoms/Container',
  component: AContainer
}

export const Default = () => ({
  components: { AContainer },
  props: {
    contentKnob: {
      default: text('Container content', 'Container')
    }
  },
  template: `
    <a-container>
      {{ contentKnob }}
    </a-container>
  `
})

export const CustomTag = () => ({
  components: { AContainer },
  props: {
    contentKnob: {
      default: text('Container content', 'Container')
    },
    tagKnob: {
      default: text('Html tag', 'div')
    }
  },
  template: `
    <a-container :tag="tagKnob">
      {{ contentKnob }}
    </a-container>
  `
})
