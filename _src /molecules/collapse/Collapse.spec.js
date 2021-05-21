import { mount } from '@vue/test-utils'
import ACollapse from './Collapse.vue'

describe('Collapse', () => {
  it('has default structure', () => {
    const wrapper = mount(ACollapse, {
      propsData: {
        title: 'Sample title'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-collapse')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ACollapse, {
      propsData: {
        title: 'Sample title'
      },
      slots: {
        default: `
          <p>Alpaca UI</p>
        `
      }
    })

    expect(wrapper.find('.a-collapse div > p').exists()).toBe(true)
    expect(wrapper.find('.a-collapse div > p').text()).toEqual('Alpaca UI')
  })

  it('renders named slot text when passed', () => {
    const wrapper = mount(ACollapse, {
      propsData: {
        title: 'Sample title'
      },
      slots: {
        button: `
          <div>Alpaca UI</div>
        `
      }
    })

    expect(wrapper.find('.a-collapse div').exists()).toBe(true)
    expect(wrapper.find('.a-collapse div').text()).toEqual('Alpaca UI')
  })
})
