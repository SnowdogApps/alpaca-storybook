// @vue/component

export default {
  props: {
    /**
     * Number of elements
     */
    items: {
      type: Number,
      default: 5
    },
    /**
     * Color for active element
     */
    activeColor: {
      type: String,
      default: '#fab216'
    },
    /**
     * Color for inactive element
     */
    inactiveColor: {
      type: String,
      default: '#c9c9c9'
    },
    /**
     * Average
     */
    average: {
      type: Number,
      default: null
    },
    /**
     * Class for button element
     */
    buttonClass: {
      type: String,
      default: null
    },
    /**
     * Class for icon element
     */
    iconClass: {
      type: String,
      default: null
    },
    /**
     * Aria label for button element
     */
    ariaLabel: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      selected: null,
      localItems: [],
      isIE: false
    }
  },
  mounted () {
    this.isIE = navigator.userAgent.match(/Trident.*rv:11\./)
    this.localItems = Array.from(
      Array(this.items),
      (x, index) => index + 1
    ).map(el => ({ val: el, isActive: false, selected: false }))
  },
  computed: {
    showAverage () {
      const average = (this.average % 1) * 100
      this.localItems.map(el => {
        el.isActive = el.val < this.average
      })

      return !Number.isInteger(this.average)
        ? `polygon(0 0, ${average}% 0, ${average}% 100%, 0% 100%)`
        : ''
    }
  },
  methods: {
    setActive (item, val) {
      this.localItems.map(el => {
        el.isActive = (item.val >= el.val || item.val === el.val) && val
      })
    },
    showAverageIcon (item) {
      return (
        (item.val - 1 < this.average && item.val > this.average) ||
        item.val === this.average
      )
    },
    showIcon (item) {
      if (item.isActive || item.selected) {
        return true
      }
      if (!item.isActive) {
        return false
      }
    },
    select (item) {
      this.localItems.map(el => {
        el.selected = item.val >= el.val
      })
      this.selected = item.val
      /**
       * Change event
       * @type { Event }
       */
      this.$emit('select', item)
    },
    buttonAriaLabel (item) {
      return this.ariaLabel
        ? this.ariaLabel
        : `Rate option, ${item} of ${this.items}. Click to vote`
    }
  }
}
