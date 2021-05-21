import ALabel from './Label.vue'

export default {
  title: 'Atoms/Label',
  component: ALabel,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'hidden'
        ]
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ALabel },
  props: Object.keys(argTypes),
  template: `
    <a-label :variant="variant">
      {{ text }}
    </a-label>
  `
})

export const Default = Template.bind({})
Default.args = {
  text: 'Label',
  variant: 'primary'
}
