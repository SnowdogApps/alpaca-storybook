import { mount } from '@vue/test-utils'
import AIcon from './Icon.vue'

describe('Icon', () => {
  it('has default structure', () => {
    const wrapper = mount(AIcon)

    expect(wrapper.element.tagName).toBe('svg')
    expect(wrapper.attributes().xmlns).toBeDefined()
    expect(wrapper.attributes().xmlns).toEqual('http://www.w3.org/2000/svg')
    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('presentation')
    expect(wrapper.attributes().focusable).toBeDefined()
    expect(wrapper.attributes().focusable).toEqual('false')
    expect(wrapper.attributes().width).toBeDefined()
    expect(wrapper.attributes().width).toEqual('24px')
    expect(wrapper.attributes().height).toBeDefined()
    expect(wrapper.attributes().height).toEqual('24px')
    expect(wrapper.attributes().viewBox).toBeDefined()
    expect(wrapper.attributes().viewBox).toEqual('0 0 24 24')
  })

  it('redners title when passed', () => {
    const wrapper = mount(AIcon, {
      propsData: {
        title: 'Arrow Left icon'
      }
    })

    const title = wrapper.find('svg > title')

    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('img')

    expect(title.exists()).toBe(true)
    expect(title.text()).toEqual('Arrow Left icon')
  })
})
