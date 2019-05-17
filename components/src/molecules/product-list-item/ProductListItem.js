import AImage from '../../atoms/image/Image.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import APrice from '../../atoms/price/Price.vue'
import ALabel from '../../atoms/label/Label.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import AButton from '../../atoms/button/Button.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'

// @vue/component
export default {
  components: {
    AImage,
    AIcon,
    APrice,
    ALabel,
    AList,
    AListItem,
    AButton,
    AQuantityUpdate
  },
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
     * Product standard price
     */
    price: {
      type: String,
      required: true
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: String,
      required: true
    },
    /**
     * Product old price
     */
    oldPrice: {
      type: String,
      required: true
    },
    /**
     * Product options/attributes array (size, color etc)
     */
    options: {
      type: Array,
      default: null
    },
    /**
     * Product quantity
     */
    qty: {
      type: Number,
      default: 1
    },
    /**
     * Specify if qty component is not needed (default: false)
     */
    hideQty: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * Triggered when value is removed by id
     * @type {Event}
     */
    onRemove () {
      this.$emit('remove', this.id)
    },
    /**
     * Triggered when value is changed
     * @type {Event}
     */
    onChange (val) {
      this.$emit('change', val)
    }
  }
}
