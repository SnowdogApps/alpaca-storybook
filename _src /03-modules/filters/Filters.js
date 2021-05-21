// @vue/component
export default {
  props: {
    activeFiltersHeading: {
      type: String,
      required: true
    },
    allFiltersHeading: {
      type: String,
      required: true
    },
    activeFilterItems: {
      type: Array,
      required: true
    },
    swatchItems: {
      type: Array,
      required: true
    },
    colorItems: {
      type: Array,
      required: true
    },
    checkboxItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isVisible: true
    }
  },
  methods: {
    showFilters () {
      this.isVisible = !this.isVisible
    }
  }
}
