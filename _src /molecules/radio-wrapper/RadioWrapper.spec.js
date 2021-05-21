import { mount } from '@vue/test-utils'
import ARadioWrapper from './RadioWrapper.vue'

describe('Radio wrapper', () => {
  it('has default structure', () => {
    const wrapper = mount(ARadioWrapper, {
      propsData: {
        legendText: 'Legend text'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-radio-wrapper')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.contains('fieldset')).toBe(true)
  })
})
