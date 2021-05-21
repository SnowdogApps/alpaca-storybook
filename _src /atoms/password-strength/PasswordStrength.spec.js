import { mount } from '@vue/test-utils'
import APasswordStrength from './PasswordStrength.vue'

describe('PasswordStrength', () => {
  it('has default structure', () => {
    const wrapper = mount(APasswordStrength)
    const $passwordIndicator = wrapper.find('.a-password-strength__indicator')

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-password-strength')
    expect(wrapper.classes().length).toBe(1)
    expect($passwordIndicator.attributes('aria-live')).toBeDefined()
    expect($passwordIndicator.attributes('aria-live')).toEqual('polite')
  })

  it('renders label when label prop provided', () => {
    const wrapper = mount(APasswordStrength, {
      propsData: {
        label: 'Password strength'
      }
    })

    const $passwordLabel = wrapper.find('.a-password-strength__label')

    expect(wrapper.contains('span')).toBe(true)
    expect(wrapper.findAll('span').length).toBe(2)
    expect($passwordLabel.exists()).toBe(true)
    expect($passwordLabel.text()).toEqual('Password strength:')
  })

  it('does not renders label when label prop empty', () => {
    const wrapper = mount(APasswordStrength, {
      propsData: {
        label: ''
      }
    })

    expect(wrapper.findAll('span').length).toBe(1)
    expect(wrapper.find('.a-password-strength__label').exists()).toBe(false)
  })

  it('renders slot text when passed', () => {
    const wrapper = mount(APasswordStrength, {
      slots: {
        default: 'Password strength'
      }
    })

    const $passwordIndicator = wrapper.find('.a-password-strength__indicator')

    expect($passwordIndicator.exists()).toBe(true)
    expect($passwordIndicator.text()).toEqual('Password strength')
  })
})
