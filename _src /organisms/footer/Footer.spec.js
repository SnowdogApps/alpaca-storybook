import { mount } from '@vue/test-utils'
import AFooter from './Footer.vue'

describe('Footer', () => {
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => { return { matches: true, addListener: jest.fn() } })
  })

  it('has default structure', () => {
    const wrapper = mount(AFooter, {
      propsData: {
        heading: 'Example heading',
        input: {
          field: {
            placeholder: 'Input',
            id: 'inputId',
            name: 'inputName'
          },
          label: {
            text: 'Input label'
          }
        },
        cookieText: 'Cookie text'
      }
    })

    expect(wrapper.is('footer')).toBe(true)
    expect(wrapper.classes()).toContain('a-footer')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AFooter, {
      slots: {
        newsletter: '<span data-test="newsletter">Newsletter</span>',
        list: '',
        socialTitle: '<span data-test="socialTitle">Title</span>',
        social: '',
        copyright: '<span data-test="copyright">Copyright</span>',
        cookie: '<span data-test="cookie">Cookie</span>'
      }
    })

    const newsletter = wrapper.find('span[data-test="newsletter"]')
    expect(newsletter.exists()).toBe(true)
    expect(newsletter.text()).toEqual('Newsletter')

    const socialTitle = wrapper.find('span[data-test="socialTitle"]')
    expect(socialTitle.exists()).toBe(true)
    expect(socialTitle.text()).toEqual('Title')

    const copyright = wrapper.find('span[data-test="copyright"]')
    expect(copyright.exists()).toBe(true)
    expect(copyright.text()).toEqual('Copyright')

    const cookie = wrapper.find('span[data-test="cookie"]')
    expect(cookie.exists()).toBe(true)
    expect(cookie.text()).toEqual('Cookie')
  })

  it('call scrollTo function', () => {
    const wrapper = mount(AFooter, {
      slots: {
        newsletter: '<span data-test="newsletter">Newsletter</span>',
        cookie: '<span data-test="cookie">Cookie</span>'
      }
    })

    const button = wrapper.find('.a-footer__scroll-up')
    const scrollTo = jest.fn()
    global.scrollTo = scrollTo
    button.trigger('click')

    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })
})
