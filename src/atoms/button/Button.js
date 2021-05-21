import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  data () {
    return {
      config: {
        base: {
          button: [
            'px-4',
            'h-12',
            'font-medium', 'uppercase',
            'transition-colors', 'duration-200', 'ease-in',
            'focus:outline-focus'
          ]
        },
        primary: {
          button: [
            'text-white',
            'bg-dark',
            'hover:text-primary',
            'hover:bg-secondary'
          ]
        },
        secondary: {
          button: [
            'text-primary',
            'bg-white',
            'border-2', 'border-dark',
            'hover:text-white',
            'hover:bg-dark'
          ]
        },
        fluid: {
          button: ['w-full']
        }
      }
    }
  }
}
