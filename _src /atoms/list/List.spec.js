import { mount } from '@vue/test-utils'
import AList from './List.vue'

describe('List', () => {
  it('has default structure', () => {
    const wrapper = mount(AList)

    expect(wrapper.is('ul')).toBe(true)
    expect(wrapper.classes()).toContain('a-list')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AList, {
      slots: {
        default: '<li>List default text</li>'
      }
    })

    expect(wrapper.find('.a-list > li').exists()).toBe(true)
    expect(wrapper.find('.a-list > li').text()).toEqual('List default text')
  })

  it('should be generated with the `ol` passed as tag', () => {
    const wrapper = mount(AList, {
      propsData: {
        tag: 'ol'
      }
    })

    expect(wrapper.is('ol')).toBe(true)
    expect(wrapper.classes()).toContain('a-list')
    expect(wrapper.props().tag).toBe('ol')
  })
})
