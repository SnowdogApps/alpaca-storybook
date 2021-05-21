import { mount } from '@vue/test-utils'
import AParagraph from './Preformatted.vue'

describe('Preformatted', () => {
  it('has default structure', () => {
    const wrapper = mount(AParagraph)

    expect(wrapper.is('pre')).toBe(true)
    expect(wrapper.classes()).toContain('a-preformatted')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AParagraph, {
      slots: {
        default: `
          <span>Alpaca UI</span>
        `
      }
    })
    expect(wrapper.find('pre > span').exists()).toBe(true)
    expect(wrapper.find('pre > span').text()).toEqual('Alpaca UI')
  })
})
