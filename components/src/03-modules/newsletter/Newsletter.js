import AInput from '../../molecules/input/Input.vue'
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'
import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'

// @vue/component
export default {
  components: {
    AInput,
    ACheckbox,
    AButton,
    ALabel
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    input: {
      type: Object,
      required: true
    },
    button: {
      type: String,
      required: true
    },
    checkboxes: {
      type: Array,
      default: null
    },
    headingClass: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      selected: {},
      value: null
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', { email: this.value, checkboxes: this.selected })
    }
  }
}
