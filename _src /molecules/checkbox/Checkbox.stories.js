import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ACheckbox from './Checkbox.vue'
import AIcon from './../../atoms/icon/Icon.vue'
import AIconCheck from './../../atoms/icon/templates/IconCheck.vue'

const defaultData = {
  data: () => {
    return {
      status: true
    }
  },
  methods: {
    onChange: action('Option changed')
  }
}

storiesOf('Molecules/Checkbox', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    ...defaultData,
    components: { ACheckbox },
    template: `
      <a-checkbox
        id="checkbox-default"
        name="checkbox-default"
        icon-title="Checked icon"
        v-model="status"
        value="some value"
        @change="onChange"
      >
        Checkbox field
      </a-checkbox>
    `
  }))
  .add('With slot', () => ({
    ...defaultData,
    components: {
      ACheckbox,
      AIcon,
      AIconCheck
    },
    template: `
      <a-checkbox
        id="checkbox-slots"
        name="checkbox-slots"
        input-class="a-checkbox__field"
        v-model="status"
        value="some value"
        @change="onChange"
      >
        <template #label>
          <label
            for="checkbox-slots"
            class="a-checkbox__label"
            style="color: #0000ff;"
          >
            <div class="a-checkbox__icon-wrapper">
              <a-icon
                class="a-checkbox__icon"
                title="Checked icon"
              >
                <a-icon-check />
              </a-icon>
            </div>
            I hereby agree for processing my personal data.
          </label>
        </template>
      </a-checkbox>
    `
  }))
