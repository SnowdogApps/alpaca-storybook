import { mount } from '@vue/test-utils'
import ALoader from './Loader.vue'

describe('Loader', () => {
  it('has default structure', () => {
    const wrapper = mount(ALoader)

    expect(wrapper.element.tagName).toBe('DIV')
    expect(wrapper.classes()).toContain('a-loader')
    expect(wrapper.classes().length).toBe(1)
  })
})
