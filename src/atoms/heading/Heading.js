import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  props: {
    /**
     * To define tag for component
     */
    tag: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      config: {
        base: {
          heading: [
            'leading-relaxed'
          ]
        },
        'first-level': {
          heading: [
            'text-3xl'
          ]
        },
        'second-level': {
          heading: [
            'text-2xl'
          ]
        },
        'third-level': {
          heading: [
            'text-xl'
          ]
        },
        'font-secondary': {
          heading: [
            'font-serif'
          ]
        }
      }
    }
  }
}
