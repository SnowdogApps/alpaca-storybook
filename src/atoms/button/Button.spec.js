import { mount } from '@vue/test-utils'
import AButton from './Button.vue'

describe('atoms/Button', () => {
  it('has default structure', () => {
    const wrapper = mount(AButton)

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.attributes().type).toBeDefined()
    expect(wrapper.attributes().type).toBe('button')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AButton, {
      slots: {
        default: `
          <span>Button with span</span>
        `
      }
    })
    expect(wrapper.find('button span').exists()).toBe(true)
    expect(wrapper.find('button span').text()).toEqual('Button with span')
  })
})
