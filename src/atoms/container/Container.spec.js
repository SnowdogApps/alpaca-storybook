import { mount } from '@vue/test-utils'
import AContainer from './Container.vue'

describe('Container', () => {
  it('has default structure', () => {
    const wrapper = mount(AContainer)

    expect(wrapper.element.tagName).toBe('MAIN')
    expect(wrapper.classes()).toContain('a-container')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders custom root element', () => {
    const wrapper = mount(AContainer, {
      propsData: {
        tag: 'div'
      }
    })

    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('a-container')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AContainer, {
      slots: {
        default: 'Container'
      }
    })

    expect(wrapper.find('.a-container').exists()).toBe(true)
    expect(wrapper.find('.a-container').text()).toEqual('Container')
  })
})
