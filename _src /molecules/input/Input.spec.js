import { mount } from '@vue/test-utils'
import AInput from './Input.vue'

describe('Input', () => {
  it('has default structure', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id'
      }
    })
    const input = wrapper.find('.a-input__field')

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-input')
    expect(wrapper.classes().length).toBe(1)

    expect(input.is('input')).toBe(true)
    expect(input.classes()).toContain('a-input__field')
    expect(input.classes().length).toBe(1)
    expect(input.attributes().id).toBeDefined()
    expect(input.attributes().id).toBe('input-id')
  })

  it('renders email input when type set to email', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id',
        type: 'email'
      }
    })

    const input = wrapper.find('.a-input__field')
    expect(input.attributes('type')).toBe('email')
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id'
      },
      slots: {
        label: '<label for="input-id">Alpaca UI</label>'
      }
    })

    const label = wrapper.find('.a-input > label')

    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Alpaca UI')
  })

  it('emits an input event', () => {
    const wrapper = mount(AInput, {
      propsData: {
        id: 'input-id'
      }
    })

    const textInput = wrapper.find('input')
    textInput.setValue('Sample text')

    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted().input[0].length).toBe(1)
    expect(wrapper.emitted().input[0][0]).toEqual('Sample text')
  })
})
