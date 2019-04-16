import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AMessage from './Message.vue'

const info = `
  ---
  #### Use these modifiers with \`.message\` class.
  - \`.message--success\` - Selector for applying styles for success message
  - \`.message--error\` - Selector for applying styles for error message
  ---
`

// @vue/component
const defaultData = {
  components: { AMessage },
  methods: {
    onClick: action('Action clicked')
  }
}

storiesOf('Molecules/Message', module)
  .addParameters({ info })
  // @vue/component
  .add('Default', () => ({
    ...defaultData,
    template: `
      <a-message
        action1-text="Ok"
        @action1="onClick"
      >
        Product has been added to the cart!
      </a-message>
    `
  }))
  // @vue/component
  .add('Success', () => ({
    ...defaultData,
    template: `
      <a-message
        class="message--success"
        action1-text="Ok"
        action2-text="Proceed to checkout"
        @action1="onClick"
        @action2="onClick"
      >
        Product has been added to the cart!
      </a-message>
    `
  }))
  // @vue/component
  .add('Error', () => ({
    ...defaultData,
    template: `
      <a-message
        class="message--error"
        action1-text="Cancel"
        @action1="onClick"
      >
        Product has been added to the cart!
      </a-message>
    `
  }))
  // @vue/component
  .add('With slot', () => ({
    ...defaultData,
    template: `
      <a-message class="message--error">
        Product has been added to the cart!
        <template #actions>
          <button
            style="
              margin: 15px 0;
              color: white;
              background: none;
              border: none;
              cursor: pointer;
            "
            @click="onClick"
          >
            Ok
          </button>
        </template>
      </a-message>
    `
  }))
