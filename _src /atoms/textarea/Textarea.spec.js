import { mount } from '@vue/test-utils'
import ATextarea from './Textarea.vue'

describe('Textarea', () => {
  it('has default structure', () => {
    const wrapper = mount(ATextarea)
    expect(wrapper.is('textarea')).toBe(true)
    expect(wrapper.classes()).toContain('a-textarea')
    expect(wrapper.classes().length).toBe(1)
  })

  it('is disabled when disabled = true', () => {
    const wrapper = mount(ATextarea, {
      propsData: {
        disabled: true
      }
    })
    const input = wrapper.find('.a-textarea')
    expect(!!input.attributes('disabled')).toBe(true)
    expect(input.element.disabled).toBe(true)
  })

  it('does not have attribute readonly by default', () => {
    const wrapper = mount(ATextarea)
    expect(wrapper.attributes('readonly')).not.toBeDefined()
  })

  it('emits an change event with single arg of value', () => {
    const input = mount(ATextarea)

    input.element.value = 'Sample text'
    input.trigger('input')
    expect(input.emitted('change')).toBeDefined()
    expect(input.emitted('change')[0].length).toEqual(1)
    expect(input.emitted('change')[0][0]).toEqual('Sample text')
  })
})
