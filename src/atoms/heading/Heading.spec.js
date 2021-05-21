import { mount } from '@vue/test-utils'
import AHeading from './Heading.vue'

describe('Heading', () => {
  it('has default structure', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        tag: 'h1'
      }
    })

    expect(wrapper.element.tagName).toBe('H1')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AHeading, {
      propsData: {
        tag: 'h1'
      },
      slots: {
        default: `
          <span>Heading level 1</span>
        `
      }
    })

    expect(wrapper.find('h1 span').exists()).toBe(true)
    expect(wrapper.find('h1 span').text()).toEqual('Heading level 1')
  })
})
