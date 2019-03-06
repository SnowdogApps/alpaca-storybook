export default {
  model: {
    prop: 'rating',
    event: 'change'
  },
  props: {
    rating: {
      type: Number,
      default: 0
    },
    ratingItems: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: this.rating
    }
  },
  computed: {
    setScores() {
      return this.rating / this.ratingItems * 100
    }
  },
  methods: {
    selectValue(selectedIndex) {
      this.active = selectedIndex
      this.$emit('change', selectedIndex)
    }
  }
}
