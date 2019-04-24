import AFieldset from '../../atoms/fieldset/Fieldset.vue'

export default {
  components: {
    AFieldset
  },
  model: {
    prop: 'rating',
    event: 'change'
  },
  props: {
    /**
     * Current average of rating
     */
    rating: {
      type: Number,
      default: 0
    },
    /**
     * Number of items
     */
    ratingItems: {
      type: Number,
      required: true
    },
    /**
     * Aria label of rate
     */
    ariaLabelRate: {
      type: String,
      default: null
    },
    /**
     * Aria label of disabled rate
     */
    disabledRateAriaLabel: {
      type: String,
      default () {
        return `Average rating: ${this.rating}`
      }
    },
    /**
     * Title of disabled rate
     */
    disabledRateTitle: {
      type: String,
      default () {
        return `Average rating: ${this.rating}`
      }
    },
    /**
     * Allows to block the rating
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: this.rating
    }
  },
  computed: {
    setScores () {
      return this.rating / this.ratingItems * 100
    }
  },
  methods: {
    selectValue (selectedIndex) {
      this.active = selectedIndex
      /**
       * Change event
       * @type {Event}
       */
      this.$emit('change', selectedIndex)
    }
  }
}
