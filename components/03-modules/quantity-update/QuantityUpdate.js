import AlpacaInput from '../../02-elements/form/input/Input.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AlpacaInput,
    AlpacaButton
  },
  props: {
    label: {
      type: String,
      default: 'Quantity'
    },
    inputClass: {
      type: String,
      default: 'quantity-update__input-wrapper'
    },
    inputId: {
      type: String,
      default: 'qty'
    },
    inputName: {
      type: String,
      default: 'qty'
    },
    inputMin: {
      type: Number,
      default: 1
    },
    inputMax: {
      type: Number,
      default: null
    },
    inputPlaceholder: {
      type: String,
      default: '0'
    },
    inputAriaLabel: {
      type: String,
      default: 'Change the quantity'
    },
    decrementButtonClass: {
      type: String,
      default: ''
    },
    decrementAriaLabel: {
      type: String,
      default: 'Decrease the quantity'
    },
    decrementIconTitle: {
      type: String,
      default: 'Minus mark'
    },
    incrementButtonClass: {
      type: String,
      default: ''
    },
    incrementAriaLabel: {
      type: String,
      default: 'Increase the quantity'
    },
    incrementIconTitle: {
      type: String,
      default: 'Plus mark'
    }
  },
  data() {
    return {
      currentValue: 1
    }
  }
}