import AButton from '../../atoms/button/Button.vue'

const DESKTOP_BREAKPOINT = 992

// @vue/component
export default {
  components: {
    AButton
  },
  data () {
    return {
      tabs: [],
      isDesktop: window.innerWidth >= DESKTOP_BREAKPOINT
    }
  },
  computed: {
    indexOfAlreadySelected () {
      return this.tabs.findIndex(tab => tab.isActive)
    },
    getContentOrder () {
      return this.isDesktop ? this.tabs.length : this.indexOfAlreadySelected
    }
  },
  mounted () {
    this.tabs = this.$children.filter(({ name }) => name && name.length)

    const mediaCheck = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`)
    mediaCheck.addListener(media => {
      this.isDesktop = media.matches
    })

    if (this.tabs && this.indexOfAlreadySelected < 0) {
      this.selectTab(this.tabs[0])
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name
      })
    }
  }
}
