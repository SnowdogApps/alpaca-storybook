import { mount } from '@vue/test-utils'
import AListItem from './ListItem.vue'

describe('ListItem', () => {
  it('has default structure', () => {
    const wrapper = mount(AListItem)

    expect(wrapper.is('li')).toBe(true)
    expect(wrapper.classes()).toContain('a-list-item')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AListItem, {
      slots: {
        default: '<span>List item default text</span>'
      }
    })

    expect(wrapper.find('.a-list-item > span').exists()).toBe(true)
    expect(wrapper.find('.a-list-item > span').text()).toEqual('List item default text')
  })

  it('should be generated with the `dt` passed as tag', () => {
    const wrapper = mount(AListItem, {
      propsData: {
        tag: 'dt'
      }
    })

    expect(wrapper.is('dt')).toBe(true)
    expect(wrapper.classes()).toContain('a-list-item')
    expect(wrapper.props().tag).toBe('dt')
  })
})
