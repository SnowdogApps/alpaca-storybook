import AInput from './Input.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconPerson from '../../atoms/icon/templates/IconPerson.vue'

export default {
  title: 'Molecules/Input',
  component: AInput,
  argTypes: {
    id: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'inline'
        ]
      }
    }
  }
}
const defaultArgs = {
  id: 'input-text',
  label: 'input label',
  variant: 'primary'
}

const Template = (args, { argTypes }) => ({
  components: { AInput },
  props: Object.keys(argTypes),
  data: () => {
    return {
      inputValue: ''
    }
  },
  template: `
    <div>
      <a-input
        v-model="inputValue"
        :id="id"
        :label="label"
        :variant="variant"
      />
    </div>
  `
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const WithSlots = (args, { argTypes }) => ({
  components: { AInput, AIcon, AIconPerson },
  props: Object.keys(argTypes),
  data: () => {
    return {
      inputValue: ''
    }
  },
  template: `
    <div>
      <a-input
        v-model="inputValue"
        :label="label"
        :id="id"
        :variant="variant"
      >
        <template #icon="{ variant   }">
          <div
            :class="[
              'h-12 w-12',
              'flex items-center justify-center',
              'absolute right-0',
              variant === 'primary' ? 'top-6' : 'top-0'
            ]
            "
          >
            <a-icon
              title="Person icon"
              @click.native="click"
            >
              <a-icon-person />
            </a-icon>
          </div>
        </template>
      </a-input>
    </div>
  `
})

WithSlots.args = defaultArgs