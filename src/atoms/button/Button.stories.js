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

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  text: 'Button primary'
}
export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  text: 'Button secondary'
}

export const Fluid = Template.bind({})
Fluid.args = {
  variant: 'fluid',
  text: 'Button fluid'
}
