import { mount, RouterLinkStub } from '@vue/test-utils'
import ALogo from './Logo.vue'

describe('Logo', () => {
  it('has default structure', () => {
    const wrapper = mount(ALogo, {
      stubs: { 'router-link': RouterLinkStub },
      propsData: {
        to: '#'
      }
    })

    expect(wrapper.is('a')).toBe(true)
    expect(wrapper.classes()).toContain('a-logo')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(ALogo, {
      stubs: { 'router-link': RouterLinkStub },
      propsData: {
        to: '#'
      },
      slots: {
        image: `
          <img src="/images/logo/alpaca.svg" alt="Logo">
        `
      }
    })

    expect(wrapper.find('.a-logo img').exists()).toBe(true)
    expect(wrapper.find('.a-logo img').attributes('alt')).toEqual('Logo')
  })

  it('should be generated with correct props', () => {
    const wrapper = mount(ALogo, {
      stubs: { 'router-link': RouterLinkStub },
      propsData: {
        to: '#',
        src: '/images/logo/alpaca.svg',
        alt: 'Logo'
      }
    })

    expect(wrapper.props().to).toBe('#')
    expect(wrapper.props().src).toBe('/images/logo/alpaca.svg')
    expect(wrapper.props().alt).toBe('Logo')
  })
})
