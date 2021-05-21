import AHeading from './Heading.vue'

export default {
  title: 'Atoms/Heading',
  component: AHeading,
  argTypes: {
    tag: {
      control: {
        type: 'text',
        required: true
      }
    },
    variant: {
      control: {
        type: 'multi-select',
        options: [
          'font-secondary',
          'first-level',
          'second-level',
          'third-level',
          'fourth-level',
          'fifth-level',
          'sixth-level'
        ]
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { AHeading },
  props: Object.keys(argTypes),
  template: `
    <a-heading
      :tag="tag"
      :variant="variant"
    >
      {{ text }}
    </a-heading>
  `
})

export const Default = Template.bind({})
Default.args = {
  tag: 'h1',
  variant: 'first-level',
  text: 'I\'m a heading'
}
