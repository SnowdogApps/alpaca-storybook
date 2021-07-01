import { shallowMount } from '@vue/test-utils'
import ATab from './Tab.vue'

const factory = () => {
  const defaultData = {
    slots: {
      default: '<span>Tab default text</span>'
    },
    propsData: {
      name: 'Tab'
    }
  }

  return shallowMount(ATab, defaultData)
}

describe('Tab', () => {
  it('has default structure', () => {
    const wrapper = factory()

    expect(wrapper).toBe('DIV')
    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('tab')
    expect(wrapper.attributes('data-tab')).toBeDefined()
  })

  it('renders slot text when passed', () => {
    const wrapper = factory()

    expect(wrapper.find('div > span').exists()).toBe(true)
    expect(wrapper.find('div > span').text()).toEqual('Tab default text')
  })

  it('has correct id attribute', () => {
    const wrapper = factory()

    expect(wrapper.props().name).toBe('Tab')
    expect(wrapper.attributes().id).toBeDefined()
    expect(wrapper.attributes().id).toEqual('tab-tab')
  })
})
