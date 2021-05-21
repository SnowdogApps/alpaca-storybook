import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import AAlert from './Alert.vue'

const info = 'Check **Knobs** tab to edit component properties dynamically.'

const data = {
  data: () => ({
    isVisible: true
  }),
  methods: {
    close () {
      this.isVisible = false
    }
  }
}

storiesOf('Molecules/Alert', module)
  .addParameters({ info })
  .add('Default', () => ({
    ...data,
    components: { AAlert },
    props: {
      contentKnobs: {
        default: text('Content text', 'Subscribe and get 10$ for Shopping!')
      }
    },
    template: `
      <a-alert
        :visible="isVisible"
        close-aria-label="Close alert"
        close-icon-title="Close icon"
        @close="close"
      >
        {{ contentKnobs }}
      </a-alert>
    `
  }))
  .add('With slots', () => ({
    ...data,
    components: { AAlert },
    props: {
      buttonKnobs: {
        default: text('Button text', 'Close')
      },
      contentKnobs: {
        default: text('Content text', 'Subscribe!')
      }
    },
    template: `
      <a-alert :visible="isVisible">
        {{ contentKnobs }}
        <template #button>
          <button
            @click="close"
            style="border: none; opacity: 0.8;"
          >
            {{ buttonKnobs }}
          </button>
        </template>
      </a-alert>
    `
  }))
