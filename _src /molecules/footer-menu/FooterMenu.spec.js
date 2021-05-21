import { mount } from '@vue/test-utils'
import AFooterMenu from './FooterMenu.vue'

describe('Footer', () => {
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => { return { matches: true, addListener: jest.fn() } })
  })

  it('has default structure', () => {
    const wrapper = mount(AFooterMenu)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-footer-menu')
    expect(wrapper.classes().length).toBe(2)
  })
})
