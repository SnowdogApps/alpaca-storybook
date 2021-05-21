import { mount } from '@vue/test-utils'
import ASelect from './Select.vue'

describe('Select', () => {
  const sampleData = {
    id: '1',
    name: 'select',
    options: [
      {
        text: 'Albania',
        value: 'AL'
      },
      {
        text: 'Algeria',
        value: 'DZ'
      }
    ]
  }

  it('has default structure', () => {
    const wrapper = mount(ASelect, {
      propsData: sampleData
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-select')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders named slots content when passed', () => {
    const wrapper = mount(ASelect, {
      propsData: sampleData,
      slots: {
        label: '<label data-test="label">Label</label>'
      }
    })

    const label = wrapper.find('label[data-test="label"]')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Label')
  })

  it('default has no disabled attribute on select', () => {
    const wrapper = mount(ASelect, {
      propsData: sampleData
    })

    const select = wrapper.find('.a-select__field')
    expect(select.attributes('disabled')).not.toBeDefined()
  })

  it('has option elements from simple options array', () => {
    const wrapper = mount(ASelect, {
      propsData: sampleData
    })
    const $options = wrapper.findAll('option')
    expect($options.length).toBe(2)
    expect($options.at(0).text()).toBe('Albania')
    expect($options.at(1).text()).toBe('Algeria')
    expect($options.at(0).attributes('value')).toBe('AL')
    expect($options.at(1).attributes('value')).toBe('DZ')
    expect($options.is('[disabled]')).toBe(false)
  })
})
