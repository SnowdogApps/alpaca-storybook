// @vue/component
export default {
  props: {
    /**
     * Current page
     */
    currentPage: {
      type: Number,
      required: true
    },
    /**
     * All pagers
     */
    numberOfPages: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      showFirst: false,
      showLast: false,
      visibleNumbers: 3,
      currentPageLocal: this.currentPage
    }
  },
  computed: {
    listOfPageNumbers () {
      return Array.from(Array(this.numberOfPages), (_, i) => i + 1)
    },
    limitedPageNumbers () {
      return this.setLimitedPageNumber()
    }
  },
  methods: {
    setLimitedPageNumber () {
      if (this.numberOfPages <= this.visibleNumbers) {
        this.showFirst = false
        this.showLast = false

        return this.listOfPageNumbers
      }

      if (
        this.currentPageLocal <
        this.visibleNumbers - Math.floor(this.visibleNumbers / 2) + 2
      ) {
        this.showFirst = false
        this.showLast = true

        return this.listOfPageNumbers.slice(0, this.visibleNumbers)
      }

      if (
        this.numberOfPages - this.currentPageLocal <
        this.visibleNumbers - Math.floor(this.visibleNumbers / 2) + 1
      ) {
        this.showFirst = true
        this.showLast = false

        return this.listOfPageNumbers.slice(
          this.numberOfPages - this.visibleNumbers
        )
      }

      this.showFirst = true
      this.showLast = true

      return this.listOfPageNumbers.slice(
        this.currentPageLocal - Math.floor(this.visibleNumbers / 2) - 1,
        this.currentPageLocal + Math.floor(this.visibleNumbers / 2)
      )
    },
    setCurrentPage (value) {
      this.currentPageLocal = value
      /**
       * Triggered when page is changed
       * @type {Event}
       */
      this.$emit('update', value)
    }
  }
}
