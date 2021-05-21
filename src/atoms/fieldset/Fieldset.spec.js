import { mount } from '@vue/test-utils'
import AFieldset from './Fieldset.vue'

describe('Fieldset', () => {
  it('has default structure', () => {
    const wrapper = mount(AFieldset, {
      propsData: {
        legendText: 'Legend text'
      }
    })

    expect(wrapper.element.tagName).toBe('FIELDSET')
    expect(wrapper.classes()).toContain('a-fieldset')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.find('legend').exists()).toBe(true)
    expect(wrapper.find('legend').text()).toEqual('Legend text')
  })

  it('renders legend with custom class', () => {
    const wrapper = mount(AFieldset, {
      propsData: {
        legendText: 'Legend text',
        legendClass: 'custom-class'
      }
    })

    expect(wrapper.props().legendClass).toBe('custom-class')
    expect(wrapper.find('.a-fieldset > legend').classes()).toContain('custom-class')
    expect(wrapper.find('.a-fieldset > legend').classes().length).toBe(2)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AFieldset, {
      propsData: {
        legendText: 'Legend text'
      },
      slots: {
        default: '<span>Fieldset content</span>'
      }
    })

    expect(wrapper.find('.a-fieldset').exists()).toBe(true)
    expect(wrapper.find('.a-fieldset > span').text()).toEqual('Fieldset content')
  })
})
