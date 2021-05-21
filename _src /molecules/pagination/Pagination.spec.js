import { mount } from '@vue/test-utils'
import APagination from './Pagination.vue'

describe('Pagination', () => {
  it('has default structure', () => {
    const wrapper = mount(APagination, {
      propsData: {
        numberOfPages: 20,
        currentPage: 5
      }
    })
    expect(wrapper.is('nav')).toBe(true)
    expect(wrapper.classes()).toContain('a-pagination')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(APagination, {
      propsData: {
        numberOfPages: 20,
        currentPage: 5
      },
      slots: {
        arrowLeft: '<span data-test="left">Left</span>',
        arrowRight: '<span data-test="right">Right</span>'
      }
    })
    expect(wrapper.find('span[data-test="left"]').text()).toBe('Left')
    expect(wrapper.find('span[data-test="right"]').text()).toBe('Right')
  })
})
