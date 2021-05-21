import { mount } from '@vue/test-utils'
import AQuantityUpdate from './QuantityUpdate.vue'

describe('Quantity update', () => {
  it('has default structure', () => {
    const wrapper = mount(AQuantityUpdate, {
      propsData: {
        value: 1
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-quantity-update')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AQuantityUpdate, {
      propsData: {
        value: 1
      },
      slots: {
        label: '<label for="qty-update">Qty</label>',
        minus: '<button type="button" data-test="minus">-</button>',
        input: '<input id="qty-update">',
        plus: '<button type="button" data-test="plus">+</button>'
      }
    })
    const label = wrapper.find('.a-quantity-update > label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toEqual('Qty')
    expect(wrapper.find('.a-quantity-update__qty > input').exists()).toBe(true)
    expect(wrapper.find('button[data-test="minus"]').text()).toBe('-')
    expect(wrapper.find('button[data-test="plus"]').text()).toBe('+')
  })

  it('updates qty on +/- button click and input change', () => {
    const wrapper = mount(AQuantityUpdate, {
      propsData: {
        value: 1
      }
    })
    const minusBtn = wrapper.find('.a-quantity-update__button--minus')
    minusBtn.trigger('click')
    expect(wrapper.vm.currentValue).toBe(0)
    const plusBtn = wrapper.find('.a-quantity-update__button--plus')
    plusBtn.trigger('click')
    expect(wrapper.vm.currentValue).toBe(1)
    const input = wrapper.find('.a-quantity-update__qty input')
    expect(input.exists()).toBe(true)
    input.element.value = '5'
    input.trigger('input')
    expect(wrapper.vm.currentValue).toBe(5)
    input.element.value = '-10'
    input.trigger('input')
    expect(wrapper.vm.currentValue).toBe(0)
  })
})
