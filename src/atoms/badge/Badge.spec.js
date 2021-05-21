import { mount } from '@vue/test-utils'
import ABadge from './Badge.vue'

describe('Badge', () => {
  it('has default structure', () => {
    const wrapper = mount(ABadge)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ABadge, {
      slots: {
        default: 'Badge default text'
      }
    })

    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find('div').text()).toEqual('Badge default text')
  })

  it('renders custom root element', () => {
    const wrapper = mount(ABadge, {
      propsData: {
        tag: 'span'
      }
    })

    expect(wrapper.element.tagName).toBe('SPAN')
  })
})
