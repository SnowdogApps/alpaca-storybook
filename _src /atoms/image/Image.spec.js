import { mount } from '@vue/test-utils'
import AImage from './Image.vue'

describe('Image', () => {
  it('has default structure', () => {
    const wrapper = mount(AImage, {
      propsData: {
        src: '/sample/link/to/image.jpg'
      }
    })

    expect(wrapper.is('img')).toBe(true)
    expect(wrapper.classes()).toContain('a-image')
    expect(wrapper.classes().length).toBe(1)
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
