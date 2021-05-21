import { mount } from '@vue/test-utils'
import ATab from './Tab.vue'

describe('Tab', () => {
  it('has default structure', () => {
    const wrapper = mount(ATab, {
      propsData: {
        name: 'Tab'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('tabpanel')
    expect(wrapper.attributes('data-tab')).toBeDefined()
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ATab, {
      slots: {
        default: '<span>Tab default text</span>'
      },
      propsData: {
        name: 'Tab'
      }
    })

    expect(wrapper.find('div > span').exists()).toBe(true)
    expect(wrapper.find('div > span').text()).toEqual('Tab default text')
  })

  it('has correct id attribute', () => {
    const wrapper = mount(ATab, {
      propsData: {
        name: 'Sample'
      }
    })

    expect(wrapper.props().name).toBe('Sample')
    expect(wrapper.attributes().id).toBeDefined()
    expect(wrapper.attributes().id).toEqual('sample-tab')
  })
})
