import { mount } from '@vue/test-utils'
import ACookieMessage from './CookieMessage.vue'

describe('Cookie message', () => {
  it('has default structure', () => {
    const wrapper = mount(ACookieMessage)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-cookie-message')
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(ACookieMessage, {
      slots: {
        default: '<span>Sample content</span>',
        button: '<button>Sample button</button>'
      }
    })

    const span = wrapper.find('.a-cookie-message span')
    expect(span.exists()).toBe(true)
    expect(span.text()).toEqual('Sample content')
    expect(wrapper.find('button').text()).toBe('Sample button')
  })
})
