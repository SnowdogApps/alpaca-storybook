import APrice from './Price.vue'

export default {
  title: 'Atoms/Price',
  component: APrice,
  argTypes: {
    regularPrice: {
      control: {
        type: 'text'
      }
    },
    specialPrice: {
      control: {
        type: 'text'
      }
    },
    ariaLabelOldPrice: {
      control: {
        type: 'text'
      }
    },
    ariaLabelSpecialPrice: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { APrice },
  props: Object.keys(argTypes),
  template: `
    <a-price
      :regular-price="regularPrice"
      :special-price="specialPrice"
      :aria-label-special-price="ariaLabelSpecialPrice"
      :aria-label-old-price="ariaLabelOldPrice"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  regularPrice: '$36,00'
}

export const SpecialPrice = Template.bind({})
SpecialPrice.args = {
  ...Default.args,
  specialPrice: '$19,90',
  ariaLabelOldPrice: 'Price reduced from:',
  ariaLabelSpecialPrice: 'On sale at:'
}
