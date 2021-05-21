import { mount } from '@vue/test-utils'
import breadcrumbs from '@mocks/breadcrumbs.json'
import ABreadcrumbs from './Breadcrumbs.vue'

describe('Breadcrumbs', () => {
  it('has default structure', () => {
    const itemsCount = breadcrumbs.length
    const wrapper = mount(ABreadcrumbs, {
      propsData: {
        breadcrumbs: breadcrumbs
      },
      stubs: ['router-link']
    })
    expect(wrapper.element.tagName).toBe('NAV')
    expect(wrapper.attributes('aria-label')).toEqual('Breadcrumb')
    expect(wrapper.findAll('span').length).toBe(itemsCount - 1)
    expect(wrapper.findAll('li').length).toBe(itemsCount)
    expect((wrapper.find('[aria-current]')).attributes('aria-current')).toEqual('page')
  })

  it('renders slots when passed', () => {
    const itemsCount = breadcrumbs.length
    const wrapper = mount(ABreadcrumbs, {
      propsData: {
        breadcrumbs: breadcrumbs
      },
      slots: {
        previous: `
          <a>Previous breadcrumb</a>
        `,
        separator: `
          <span>-</span>
        `,
        current: `
          <a aria-current="page">Current breadcrumb</a>
        `
      }
    })

    expect(wrapper.findAll('li')).toHaveLength(itemsCount)
    expect(wrapper.find('a').text()).toEqual('Previous breadcrumb')
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.find('span').text()).toEqual('-')
    expect(wrapper.find('[aria-current]').exists()).toBe(true)
    expect(wrapper.find('[aria-current]').text()).toEqual('Current breadcrumb')
  })
})
