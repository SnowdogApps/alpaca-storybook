// @vue/component
export default {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    slider: {
      type: Object,
      default: () => {
        return {
          dotSize: 24,
          height: 8,
          tooltip: null,
          enableCross: false,
          railStyle: {
            'background-color': '#73739c'
          },
          processStyle: {
            'background-color': '#31e37d',
            'box-shadow': 'inset 0 0 3px rgba(51, 51, 51, 0.45)'
          },
          dotStyle: {
            'box-shadow': '0 2px 4px 0 rgba(51, 51, 51, 0.5)',
            width: '24px',
            height: '24px',
            'border-radius': '50%',
            'background-color': '#fff'
          }
        }
      }
    },
    lowerInput: {
      type: Object,
      default: () => {
        return {
          label: 'Minimum value',
          field: {
            id: 'range-filter-min',
            name: 'range-filter-min',
            placeholder: ''
          },
          suffix: '$'
        }
      }
    },
    upperInput: {
      type: Object,
      default: () => {
        return {
          label: 'Maximum value',
          field: {
            id: 'range-filter-max',
            name: 'range-filter-max',
            placeholder: ''
          },
          suffix: '$'
        }
      }
    },
    applyLabel: {
      type: String,
      default: 'Apply'
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    minInput: {
      get: function () {
        return this.currentValue[0]
      },
      set: function (minValue) {
        minValue = this.limitValue(minValue) || this.min
        if (minValue > this.currentValue[1]) {
          this.currentValue = [minValue, minValue]
        } else {
          this.$set(this.currentValue, 0, minValue)
        }
        this.syncValue()
      }
    },
    maxInput: {
      get: function () {
        return this.currentValue[1]
      },
      set: function (maxValue) {
        maxValue = this.limitValue(maxValue) || this.max
        if (maxValue < this.currentValue[0]) {
          this.currentValue = [maxValue, maxValue]
        } else {
          this.$set(this.currentValue, 1, maxValue)
        }
        this.syncValue()
      }
    }
  },
  methods: {
    limitValue (value) {
      if (value > this.max) {
        value = this.max
      }
      if (value < this.min) {
        value = this.min
      }
      return value
    },
    syncValue (value) {
      if (value) {
        this.currentValue = value
      }
      this.$emit('input', this.currentValue)
    },
    apply () {
      this.$emit('apply', this.currentValue)
    }
  }
}
