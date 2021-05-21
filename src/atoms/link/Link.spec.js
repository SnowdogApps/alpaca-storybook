import { mount } from '@vue/test-utils'
import ALink from './Link.vue'

describe('Link', () => {
  it('has default structure', () => {
    const wrapper = mount(ALink)

    expect(wrapper.element.tagName).toBe('A')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ALink, {
      slots: {
        default: 'Link default text'
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.text).toEqual('Link default text')
  })

  it('should be generated with the `href` passed as attributes', () => {
    const href = '#'
    const wrapper = mount(ALink, {
      attrs: {
        href
      }
    })
    expect(wrapper.attributes().href).toBeDefined()
    expect(wrapper.attributes().href).toEqual(href)
  })
})
