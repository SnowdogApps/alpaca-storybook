import ALink from './Link.vue'

export default {
  title: 'Atoms/Link',
  component: ALink,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'inverted',
          'secondary'
        ]
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ALink },
  props: Object.keys(argTypes),
  template: `
    <a-link
      :tag="tag"
      :variant="variant"
    >
      {{ text }}
    </a-link>
  `
})

export const Default = Template.bind({})
Default.args = {
  tag: 'a',
  variant: 'primary',
  text: 'Link'
}
