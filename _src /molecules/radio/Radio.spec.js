import { mount } from '@vue/test-utils'
import ARadio from './Radio.vue'

describe('Radio', () => {
  it('has default structure', () => {
    const wrapper = mount(ARadio, {
      propsData: {
        id: '1',
        name: 'Radio',
        value: 'radio'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-radio')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders default slots content when passed', () => {
    const wrapper = mount(ARadio, {
      propsData: {
        id: '1',
        name: 'Radio',
        value: 'radio'
      },
      slots: {
        default: '<span data-test="default">Default slot</span>'
      }
    })

    const span = wrapper.find('.a-radio__label span[data-test="default"]')
    expect(span.exists()).toBe(true)
    expect(span.text()).toEqual('Default slot')
  })

  it('renders named slots content when passed', () => {
    const wrapper = mount(ARadio, {
      propsData: {
        id: '1',
        name: 'Radio',
        value: 'radio'
      },
      slots: {
        option: '<label data-test="label">Label</label>'
      }
    })

    const label = wrapper.find('label[data-test="label"]')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Label')
  })

  it('default has input type radio', () => {
    const wrapper = mount(ARadio, {
      propsData: {
        id: '1',
        name: 'Radio',
        value: 'radio'
      }
    })

    const input = wrapper.find('.a-radio__field')
    expect(input.attributes('type')).toBeDefined()
    expect(input.attributes('type')).toEqual('radio')
  })

  it('default has no disabled attribute on input', () => {
    const wrapper = mount(ARadio, {
      propsData: {
        id: '1',
        name: 'Radio',
        value: 'radio'
      }
    })

    const input = wrapper.find('.a-radio__field')
    expect(input.attributes('disabled')).not.toBeDefined()
  })

  it('emits a change event when clicked', () => {
    const wrapper = mount(ARadio, {
      propsData: {
        id: '1',
        name: 'Radio',
        value: 'radio'
      }
    })

    const input = wrapper.find('.a-radio__field')
    expect(input).toBeDefined()
    input.trigger('click')
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual('radio')
  })
})
