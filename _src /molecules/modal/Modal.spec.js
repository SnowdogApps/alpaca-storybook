import { mount } from '@vue/test-utils'
import AModal from './Modal.vue'

describe('Modal', () => {
  it('has default structure', () => {
    const wrapper = mount(AModal)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.isVisible()).toBe(false)
    expect(wrapper.classes()).toContain('a-modal')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.find('.a-modal__mask').exists()).toBe(true)
    expect(wrapper.find('.a-modal__header').exists()).toBe(false)
    expect(wrapper.find('.a-modal__content').exists()).toBe(false)
    expect(wrapper.attributes()['aria-hidden']).toBeDefined()
    expect(wrapper.attributes()['aria-hidden']).toEqual('true')
    expect(wrapper.attributes().role).toBeDefined()
    expect(wrapper.attributes().role).toEqual('dialog')
    expect(wrapper.attributes()['aria-labelledby']).toBeUndefined()
    expect(wrapper.attributes()['aria-describedby']).toBeUndefined()
  })

  it('should render default heading if provided', () => {
    const wrapper = mount(AModal, {
      propsData: {
        visible: true,
        heading: 'Sample heading'
      }
    })

    expect(wrapper.find('.a-modal__heading').exists()).toBe(true)
    expect(wrapper.find('.a-modal__heading').text()).toEqual('Sample heading')
  })

  it('should render aria-labelledby/aria-describedby if provided', () => {
    const wrapper = mount(AModal, {
      propsData: {
        name: 'test-modal',
        ariaLabelledby: 'Sample aria-labelledby',
        ariaDescribedby: 'Sample aria-describedby'
      }
    })

    expect(wrapper.attributes()['aria-labelledby']).toBeDefined()
    expect(wrapper.attributes()['aria-labelledby']).toEqual('Sample aria-labelledby')
    expect(wrapper.attributes()['aria-describedby']).toBeDefined()
    expect(wrapper.attributes()['aria-describedby']).toEqual('Sample aria-describedby')
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(AModal, {
      propsData: {
        visible: true
      },
      slots: {
        default: '<span data-test="content">Sample text</span>',
        heading: '<h1 data-test="heading">Sample heading</h1>',
        close: '<button data-test="close">Sample button</button>'
      }
    })

    expect(wrapper.find('.a-modal__content [data-test="content"]').exists()).toBe(true)
    expect(wrapper.find('.a-modal__content [data-test="content"]').text()).toEqual('Sample text')
    expect(wrapper.find('.a-modal__content [data-test="heading"]').exists()).toBe(true)
    expect(wrapper.find('.a-modal__content [data-test="heading"]').text()).toEqual('Sample heading')
    expect(wrapper.find('.a-modal__content [data-test="close"]').exists()).toBe(true)
    expect(wrapper.find('.a-modal__content [data-test="close"]').text()).toEqual('Sample button')
  })

  it('should change aria hidden when visible', () => {
    const wrapper = mount(AModal, {
      propsData: {
        visible: true
      }
    })

    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.attributes()['aria-hidden']).toBeDefined()
    expect(wrapper.attributes()['aria-hidden']).toEqual('false')
    expect(wrapper.find('.a-modal__content').exists()).toBe(true)
  })

  it('should do not render header if there is no heading and close button is disabled', () => {
    const wrapper = mount(AModal, {
      propsData: {
        closeButton: false
      }
    })

    expect(wrapper.find('.a-modal__header').exists()).toBe(false)
  })
})
