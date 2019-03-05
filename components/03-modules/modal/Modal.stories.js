import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaModal from '../../03-modules/modal/Modal.vue'

import EventBus from '../../../eventBus'

storiesOf('Modules/Modal', module)
  .add('Default', () => ({
    components: { App, AlpacaButton, AlpacaModal },
    template: `
      <app>
        <alpaca-button @click="showModal">
          Modal button
        </alpaca-button>
        <alpaca-modal
          heading="Modal Heading"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-modal>
      </app>
    `,
    methods: {
      showModal () {
        EventBus.$emit('modal-show')
      }
    }
  }))
  .add('Blank', () => ({
    components: { App, AlpacaButton, AlpacaModal },
    template: `
      <app>
        <alpaca-button @click="showModal">
          Open Modal
        </alpaca-button>
        <alpaca-modal
          blank
          ref="myModalCloseButtonRef"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-modal>
      </app>
    `,
    methods: {
      showModal() {
        this.$refs.myModalCloseButtonRef.show()
      }
    }
  }))