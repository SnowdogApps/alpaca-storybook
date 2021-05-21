import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  data () {
    return {
      config: {
        base: {
          label: [
            'leading-relaxed'
          ]
        },
        primary: {
          label: [
            'text-gray-600'
          ]
        },
        hidden: {
          label: [
            'sr-only'
          ]
        }
      }
    }
  }
}
