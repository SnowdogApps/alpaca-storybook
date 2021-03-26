// @vue/component
import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [ getClass ],
  props: {
    tag: {
      type: String,
      default: 'a'
    }
  },
  data () {
    return {
      config: {
        base: {
          link: [
            'no-underline',
            'leading-relaxed',
            'hover:underline',
            'focus:underline',
            'hover:cursor-pointer'
          ]
        },
        primary: {
          link: [
            'text-primary',
            'hover:text-blue',
            'focus:text-blue'
          ]
        },
        inverted: {
          link: [
            'text-blue',
            'hover:text-primary',
            'focus:text-primary'
          ]
        },
        secondary: {
          link: [
            'text-secondary',
            'hover:text-primary',
            'focus:text-primary'
          ]
        }
      }
    }
  }
}
