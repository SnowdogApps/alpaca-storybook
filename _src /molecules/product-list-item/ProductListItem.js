// @vue/component
export default {
  model: {
    prop: 'qty',
    event: 'change'
  },
  props: {
    /**
     * Product id
     */
    id: {
      type: String,
      required: true
    },
    /**
     * Product name
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Product url
     */
    url: {
      type: String,
      required: true
    },
    /**
     * Product image url
     */
    imageUrl: {
      type: String,
      required: true
    },
    /**
     * Product prices
     */
    prices: {
      type: [Object, Boolean],
      default: false
    },
    /**
     * Product options/attributes array (size, color etc)
     */
    options: {
      type: Array,
      default: null
    },
    /**
     * Product remove button aria label
     */
    removeButtonAriaLabel: {
      type: String,
      default: null
    },
    /**
     * Action icon title
     */
    actionIconTitle: {
      type: String,
      default: null
    }
  },
  computed: {
    hasQuantitySlot () {
      return !!this.$slots.quantity
    }
  },
  methods: {
    onRemove () {
      /**
       * Triggered when value is removed by id
       * @type {Event}
       */
      this.$emit('remove', this.id)
    },
    onChange (val) {
      /**
       * Triggered when value is changed
       * @type {Event}
       */
      this.$emit('change', val)
    }
  }
}
