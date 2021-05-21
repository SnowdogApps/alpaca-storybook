import { storiesOf } from '@storybook/vue'
import { text, number } from '@storybook/addon-knobs'

import ATextarea from './Textarea.vue'

const info = 'Check **Knobs** tab to edit component properties dynamically'

storiesOf('Atoms/Textarea', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ATextarea },
    props: {
      placeholderKnob: {
        default: text('Placeholder', 'Description')
      },
      rowsKnob: {
        default: number('Rows', 4)
      }
    },
    template: `
      <a-textarea
        :placeholder="placeholderKnob"
        :rows="rowsKnob"
      />
    `
  }))
