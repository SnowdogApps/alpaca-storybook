import { mount } from '@vue/test-utils'
import ANewsletter from './Newsletter.vue'

describe('Newsletter', () => {
  it('has default structure', () => {
    const wrapper = mount(ANewsletter)
    expect(wrapper.is('form')).toBe(true)
    expect(wrapper.classes()).toContain('a-newsletter')
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(ANewsletter, {
      slots: {
        heading: '<h2 data-test="heading">Sample heading</h2>',
        input: '<input data-test="input" type="text"/>',
        button: '<button data-test="button" type="button">Sample button</button>',
        agreements: '<span data-test="span">Sample agreement</span>'
      }
    })

    const heading = wrapper.find('h2[data-test="heading"]')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toEqual('Sample heading')

    const input = wrapper.find('input[data-test="input"]')
    expect(input.exists()).toBe(true)

    const button = wrapper.find('button[data-test="button"]')
    expect(button.exists()).toBe(true)
    expect(button.text()).toEqual('Sample button')

    const agreement = wrapper.find('span[data-test="span"]')
    expect(agreement.exists()).toBe(true)
    expect(agreement.text()).toEqual('Sample agreement')
  })
})
