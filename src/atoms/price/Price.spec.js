import { mount } from '@vue/test-utils'
import APrice from './Price.vue'

describe('Price', () => {
  it('has default structure', () => {
    const wrapper = mount(APrice)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders regular price when props regularPrice passed', () => {
    const wrapper = mount(APrice, {
      propsData: {
        regularPrice: '$128,00'
      }
    })

    expect(wrapper.text()).toEqual('$128,00')
  })

  it('renders old and special prices when props regularPrice and specialPrice passed', () => {
    const wrapper = mount(APrice, {
      propsData: {
        regularPrice: '$128,00',
        specialPrice: '$99,00',
        ariaLabelOldPrice: 'Price reduced from:',
        ariaLabelSpecialPrice: 'On sale at:'
      }
    })

    const oldPrice = wrapper.find('del')
    const specialPrice = wrapper.find('ins')

    expect(oldPrice.exists()).toBe(true)
    expect(oldPrice.text()).toEqual('$128,00')
    expect(oldPrice.attributes('aria-label')).toEqual('Price reduced from: $128,00')

    expect(specialPrice.exists()).toBe(true)
    expect(specialPrice.text()).toEqual('$99,00')
    expect(specialPrice.attributes('aria-label')).toEqual('On sale at: $99,00')
  })

  it('renders named slot regularPrice when passed', () => {
    const wrapper = mount(APrice, {
      slots: {
        regularPrice: '<span>Price: $123,00</span>'
      }
    })

    expect(wrapper.find('div > span').exists()).toBe(true)
    expect(wrapper.find('div > span').text()).toEqual('Price: $123,00')
  })
})
