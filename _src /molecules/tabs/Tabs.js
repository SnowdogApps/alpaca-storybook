import KeyCodes from '../../utils/key-codes'

// @vue/component

export default {
  data () {
    return {
      tabs: null,
      activeFocusedTab: 0
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
      this.tabs.forEach(tab => {
        if (selectedTab === this.activeFocusedTab) {
          tab.isActive = tab.name === this.tabs[this.activeFocusedTab].name
        } else {
          tab.isActive = tab.name === selectedTab.name
        }
      })
    },
    focus (el) {
      this.$refs[el][0].focus()
    },
    onKeydown (e) {
      const key = e.keyCode

      if (key === KeyCodes.TAB) {
        e.preventDefault()
        e.stopPropagation()
        this.$refs.content.focus()
      } else if (
        (key === KeyCodes.LEFT ||
          key === KeyCodes.UP ||
          key === KeyCodes.HOME) &&
        this.activeFocusedTab > 0
      ) {
        if (key === KeyCodes.HOME) {
          this.focus('button_0')
        } else {
          this.activeFocusedTab = this.activeFocusedTab - 1
          this.focus('button_' + this.activeFocusedTab)
        }
      } else if (
        (key === KeyCodes.RIGHT ||
          key === KeyCodes.DOWN ||
          key === KeyCodes.END) &&
        this.activeFocusedTab < this.tabs.length - 1
      ) {
        if (key === KeyCodes.END) {
          this.focus('button_' + (this.tabs.length - 1))
        } else {
          this.activeFocusedTab = this.activeFocusedTab + 1
          this.focus('button_' + this.activeFocusedTab)
        }
      }
      this.selectTab(this.activeFocusedTab)
    }
  }
}
