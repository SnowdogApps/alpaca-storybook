import AButton from './Button.vue'

export default {
  title: 'Atoms/Button',
  component: AButton,
  argTypes: {
    variant: {
      control: {
        type: 'multi-select',
        options: [
          'primary',
          'secondary',
          'fluid'
        ]
      }
    },
    onClick: {
      action: 'clicked'
    },
    text: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { AButton },
  props: Object.keys(argTypes),
  template: `
    <a-button
      :variant="variant"
      type="button"
      v-bind="$props"
      @click="onClick"
    >
      {{ text }}
    </a-button>
  `
})

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
  text: 'Button primary'
}
