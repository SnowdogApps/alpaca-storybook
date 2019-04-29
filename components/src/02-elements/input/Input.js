import ALabel from '../../atoms/label/Label.vue'

// @vue/component
export default {
  components: {
    ALabel
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    hiddenLabel: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    labelClass: {
      type: String,
      default: null
    },
    inputDefaultClass: {
      type: Boolean,
      default: true
    },
    inputClass: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    autocomplete: {
      type: String,
      default: 'on'
    }
  }
}
