import { mount } from '@vue/test-utils'
import ARating from './Rating.vue'

describe('Rating', () => {
  it('has default structure', () => {
    const wrapper = mount(ARating)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-rating')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ARating, {
      slots: {
        item: '<span data-test="item">Sample text</span>'
      }
    })

    expect(wrapper.find('.a-rating > button > span').exists()).toBe(true)
    expect(wrapper.find('.a-rating > button > span').text()).toEqual('Sample text')
  })

  it('should return chosen value', () => {
    const wrapper = mount(ARating, {
      propsData: {
        items: 1,
        buttonClass: 'button-class'
      }
    })

    const item = wrapper.find('.a-rating__button')
    item.trigger('click')
    expect(wrapper.find('.a-rating__button').classes()).toContain('selected')
    expect(wrapper.props().buttonClass).toBe('button-class')
    expect(wrapper.find('.a-rating > button').classes()).toContain('button-class')
    expect(item.is('.a-rating > button')).toBe(true)
  })
})
