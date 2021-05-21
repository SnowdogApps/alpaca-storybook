import { mount } from '@vue/test-utils'
import AImage from './Image.vue'

describe('Image', () => {
  it('has default structure', () => {
    const wrapper = mount(AImage, {
      propsData: {
        src: '/images/image/banner.jpg'
      }
    })

    expect(wrapper.element.tagName).toBe('IMG')
  })

  it('should be generated with the `alt` passed as attributes', () => {
    const wrapper = mount(AImage, {
      attrs: {
        alt: 'Sample Image'
      }
    })

    expect(wrapper.attributes().alt).toBeDefined()
    expect(wrapper.attributes().alt).toEqual('Sample Image')
  })
})
