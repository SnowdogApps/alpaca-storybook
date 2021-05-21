import Vue from 'vue'
import { mount } from '@vue/test-utils'
import ATabs from './Tabs.vue'
import ATab from '../../atoms/tab/Tab.vue'

describe('Tabs', () => {
  it('has default structure', () => {
    const wrapper = mount(ATabs)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('a-tabs')
    expect(wrapper.classes().length).toBe(1)
  })

  it('renders slot content when passed', () => {
    const App = Vue.extend({
      render (h) {
        return h(ATabs, {}, [
          h(ATab, { props: { name: 'First' } }, 'First content'),
          h(ATab, { props: { name: 'Second' } }, 'Second content')
        ])
      }
    })
    const wrapper = mount(App)

    expect(wrapper.find('#first-tab-trigger').text()).toEqual('First')
    expect(wrapper.find('#first-tab').text()).toEqual('First content')
    expect(wrapper.find('#second-tab-trigger').text()).toEqual('Second')
    expect(wrapper.find('#second-tab').text()).toEqual('Second content')
  })

  it('switches between tabs', () => {
    const App = Vue.extend({
      render (h) {
        return h(ATabs, {}, [
          h(ATab, { props: { name: 'First' } }, 'First content'),
          h(ATab, { props: { name: 'Second' } }, 'Second content')
        ])
      }
    })
    const wrapper = mount(App)
    const firstTrigger = wrapper.find('#first-tab-trigger')
    const secondTrigger = wrapper.find('#second-tab-trigger')
    const firstContent = wrapper.find('#first-tab')
    const secondContent = wrapper.find('#second-tab')

    firstTrigger.trigger('click')
    expect(firstTrigger.attributes('aria-selected')).toEqual('true')
    expect(firstContent.isVisible()).toBe(true)
    expect(secondTrigger.attributes('aria-selected')).toEqual('false')
    expect(secondContent.isVisible()).toBe(false)

    secondTrigger.trigger('click')
    expect(firstTrigger.attributes('aria-selected')).toEqual('false')
    expect(firstContent.isVisible()).toBe(false)
    expect(secondTrigger.attributes('aria-selected')).toEqual('true')
    expect(secondContent.isVisible()).toBe(true)
  })
})
