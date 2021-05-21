import { mount } from '@vue/test-utils'
import ACheckbox from './Checkbox.vue'

describe('Checkbox', () => {
  it('has default structure', () => {
    const wrapper = mount(ACheckbox, {
      propsData: {
        id: '1',
        name: 'Checkbox',
        value: 'checkbox'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-checkbox')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders default slots content when passed', () => {
    const wrapper = mount(ACheckbox, {
      propsData: {
        id: '1',
        name: 'Checkbox',
        value: 'checkbox'
      },
      slots: {
        default: '<span data-test="default">Default slot</span>'
      }
    })

    const span = wrapper.find('.a-checkbox__label span[data-test="default"]')
    expect(span.exists()).toBe(true)
    expect(span.text()).toEqual('Default slot')
  })

  it('renders named slots content when passed', () => {
    const wrapper = mount(ACheckbox, {
      propsData: {
        id: '1',
        name: 'Checkbox',
        value: 'checkbox'
      },
      slots: {
        label: '<label data-test="label">Label</label>'
      }
    })

    const label = wrapper.find('label[data-test="label"]')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Label')
  })

  it('default has input type radio', () => {
    const wrapper = mount(ACheckbox, {
      propsData: {
        id: '1',
        name: 'Checkbox',
        value: 'checkbox'
      }
    })

    const input = wrapper.find('.a-checkbox__field')
    expect(input.attributes('type')).toBeDefined()
    expect(input.attributes('type')).toEqual('checkbox')
  })

  it('default has no disabled attribute on input', () => {
    const wrapper = mount(ACheckbox, {
      propsData: {
        id: '1',
        name: 'Checkbox',
        value: 'checkbox'
      }
    })

    const input = wrapper.find('.a-checkbox__field')
    expect(input.attributes('disabled')).not.toBeDefined()
  })

  it('emits a change event when clicked', () => {
    const wrapper = mount(ACheckbox, {
      propsData: {
        id: '1',
        name: 'Checkbox',
        value: 'checkbox'
      }
    })

    const input = wrapper.find('.a-checkbox__field')
    expect(input).toBeDefined()
    input.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual(true)

    input.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual(false)
  })
})
