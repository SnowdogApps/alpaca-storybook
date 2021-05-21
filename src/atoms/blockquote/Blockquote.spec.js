import { mount } from '@vue/test-utils'
import ABlockquote from './Blockquote.vue'

describe('Blockquote', () => {
  it('has default structure', () => {
    const wrapper = mount(ABlockquote)

    expect(wrapper.element.tagName).toBe('BLOCKQUOTE')
    expect(wrapper.classes()).toContain('a-blockquote')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ABlockquote, {
      slots: {
        default: 'Blockquote content'
      }
    })

    expect(wrapper.find('.a-blockquote').exists()).toBe(true)
    expect(wrapper.find('.a-blockquote').text()).toEqual('Blockquote content')
  })
})
