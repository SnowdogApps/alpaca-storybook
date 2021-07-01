import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  data () {
    return {
      tabs: null,
      activeFocusedTab: 0,
      config: {
        base: {
          tabs: [],
          tabs__tablist: [
            'flex', 'w-full', 'no-wrap',
            'overflow-x-scroll'
          ],
          'tabs__nav-button': [
            'flex', 'items-center', 'justify-center', 'flex-grow',
            'px-4', 'py-2',
            'font-bold', 'leading-loose', 'uppercase', 'whitespace-nowrap'
          ],
          'tabs__nav-button--inactive': [
            'border-b', 'border-gray-200', 'hover:border-primary',
            'text-gray-400'
          ],
          'tabs__nav-button--active': [
            'border-b', 'border-primary',
            'text-primary'
          ],
          tabs__content: [
            'w-full',
            'px-6', 'py-10'
          ]
        }
      }
    }
  },
  computed: {
    tabsChildren () {
      return this.$children.filter(child => {
        return child.$el.dataset.tab
      })
    }
  },
  mounted () {
    this.tabs = this.tabsChildren
  },
  methods: {
    selectTab (selectedTab) {
      this.$emit('click', selectedTab.name)
      this.tabs.forEach((tab, index) => {
        if (selectedTab === this.activeFocusedTab) {
          tab.isActive = tab.name === this.tabs[this.activeFocusedTab].name
        } else if (tab.name === selectedTab.name) {
          tab.isActive = true
          this.activeFocusedTab = index
        } else {
          tab.isActive = false
        }
      })
    },
    focus (el) {
      this.$refs[el][0].focus()
    },
    onKeydown (e) {
      const key = e.key
      const tabsCount = this.tabs.length

      if (key === 'ArrowRight' || key === 'ArrowDown') {
        this.activeFocusedTab = (this.activeFocusedTab + 1) % tabsCount
        this.selectTab(this.activeFocusedTab)
        this.focus(`button_${this.activeFocusedTab}`)
      } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
        this.activeFocusedTab = (this.activeFocusedTab - 1 + tabsCount) % tabsCount
        this.selectTab(this.activeFocusedTab)
        this.focus(`button_${this.activeFocusedTab}`)
      } else if (key === 'Home') {
        this.activeFocusedTab = 0
        this.selectTab(this.activeFocusedTab)
        this.focus(`button_${this.activeFocusedTab}`)
      } else if (key === 'End') {
        this.activeFocusedTab = tabsCount - 1
        this.selectTab(this.activeFocusedTab)
        this.focus(`button_${this.activeFocusedTab}`)
      }
    }
  }
}
