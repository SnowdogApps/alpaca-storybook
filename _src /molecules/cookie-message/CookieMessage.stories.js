import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import ACookieMessage from './CookieMessage.vue'
import ALink from '../../atoms/link/Link.vue'

const data = {
  components: { ACookieMessage, ALink },
  data: () => ({
    isVisible: true
  }),
  methods: {
    close () {
      this.isVisible = false
    }
  }
}
storiesOf('Molecules/Cookie Message', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    ...data,
    props: {
      textKnobs: {
        default: text('Button text', 'Close')
      },
      linkText: {
        default: text('Link text', 'Example link')
      },
      infoText: {
        default: text('Info text', 'Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.')
      }
    },
    template: `
      <a-cookie-message
        :visible="isVisible"
        :close-button="textKnobs"
        close-aria-label="Close cookie message"
        close-icon-title="Close message"
        @close="close"
      >
        <a-link href='#'>
          {{ linkText }}
        </a-link>
        {{ infoText }}
      </a-cookie-message>
    `
  }))
  .add('With slots', () => ({
    ...data,
    props: {
      textKnobs: {
        default: text('Button text', 'I agree')
      },
      linkText: {
        default: text('Link text', 'Example link')
      },
      infoText: {
        default: text('Info text', 'Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.')
      }
    },
    template: `
      <a-cookie-message
        :visible="isVisible"
        close-aria-label="Close cookie message"
        close-icon-title="Close message"
        @close="close"
      >
        <a-link href='#'>
          {{ linkText }}
        </a-link>
        {{ infoText }}
        <template #button="{ close }">
          <button
            class="a-cookie-message__close"
            @click="close();"
          >
            {{ textKnobs }}
          </button>
        </template>
      </a-cookie-message>
    `
  }))
