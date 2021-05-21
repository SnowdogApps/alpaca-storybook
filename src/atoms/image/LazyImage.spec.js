import { mount } from '@vue/test-utils'
import merge from 'lodash.merge'
import LazyImage from './LazyImage.vue'

const slotContent = 'This is a placeholder'
const factory = (overrideData = {}) => {
  const defaultData = {
    propsData: {
      tag: 'img',
      src: '/images/image/banner.jpg'
    }
  }

  return mount(LazyImage, merge(defaultData, overrideData))
}

describe('atoms/LazyImage.vue', () => {
  it('has default structure', () => {
    const wrapper = factory()

    expect(wrapper.element.tagName).toBe('IMG')
  })

  it('contains image src when intersected', async () => {
    const wrapper = factory()

    expect(wrapper.find('img').attributes().src).toBeUndefined()

    await wrapper.setData({ intersected: true })

    expect(wrapper.find('img').attributes().src).toBe(wrapper.vm.src)
  })

  it('@load event emitted when image loaded', async () => {
    const wrapper = factory()

    expect(wrapper.emitted('load')).toBeUndefined()

    await wrapper.setData({ intersected: true })
    wrapper.find('img').trigger('load')

    expect(wrapper.emitted('load')).toBeDefined()
    expect(wrapper.emitted('load').length).toBe(1)
  })

  it('placeholder slot data showed before standard image in picture tag', () => {
    const wrapper = factory({
      propsData: {
        tag: 'picture',
        placeholderSrc: 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII&#x3D;'
      },
      slots: {
        placeholder: `<span class="placeholder-slot">${slotContent}</span>`
      }
    })
    wrapper.setData({ intersected: false })

    expect(wrapper.find('.placeholder-slot').exists()).toBe(true)
    expect(wrapper.find('.placeholder-slot').text()).toBe(slotContent)
  })

  it('default slot data showed if intersected', async () => {
    const wrapper = factory({
      propsData: {
        tag: 'picture'
      },
      slots: {
        default: `<span class="default-slot">${slotContent}</span>`
      }
    })

    await wrapper.setData({ intersected: true })

    expect(wrapper.find('.default-slot').exists()).toBe(true)
    expect(wrapper.find('.default-slot').text()).toBe(slotContent)
  })

  it('@load event emitted when picture tag loaded', async () => {
    const wrapper = factory({
      propsData: {
        tag: 'picture'
      }
    })

    expect(wrapper.emitted('load')).toBeUndefined()

    await wrapper.setData({ intersected: true })
    wrapper.find('img').trigger('load')

    expect(wrapper.emitted('load')).toBeDefined()
    expect(wrapper.emitted('load').length).toBe(1)
  })

  it('@error event emitted when image is broken', () => {
    const wrapper = factory()

    expect(wrapper.emitted('image-error')).toBeUndefined()

    wrapper.find('img').trigger('error')

    expect(wrapper.emitted('imageError')).toBeDefined()
    expect(wrapper.emitted('imageError').length).toBe(1)
  })

  it('@error event emitted when picture is broken', () => {
    const wrapper = factory({
      propsData: {
        tag: 'picture'
      }
    })

    expect(wrapper.emitted('image-error')).toBeUndefined()

    wrapper.find('img').trigger('error')

    expect(wrapper.emitted('imageError')).toBeDefined()
    expect(wrapper.emitted('imageError').length).toBe(1)
  })

  it('should be generated with the `alt` passed as attributes', () => {
    const wrapper = factory({
      propsData: {
        alt: 'Sample Image'
      }
    })

    expect(wrapper.find('img').attributes().alt).toBeDefined()
    expect(wrapper.find('img').attributes().alt).toEqual('Sample Image')
  })
})
