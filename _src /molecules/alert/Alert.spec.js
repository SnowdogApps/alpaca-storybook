import { mount } from '@vue/test-utils'
import AAlert from './Alert.vue'

describe('Alert', () => {
  it('has default structure', () => {
    const wrapper = mount(AAlert)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-alert')
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AAlert, {
      slots: {
        default: '<span>Sample content</span>',
        button: '<button type="button">Sample button</button>'
      }
    })

    const span = wrapper.find('.a-alert span')
    expect(span.exists()).toBe(true)
    expect(span.text()).toEqual('Sample content')
    expect(wrapper.find('button').text()).toBe('Sample button')
  })
})
