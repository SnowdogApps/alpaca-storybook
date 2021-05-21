import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  inheritAttrs: false,
  props: {
    /**
     * To use another tag instead of `img`, e.g. `picture`
     */
    tag: {
      type: String,
      default: 'img',
      validator: tag => tag === 'img' || tag === 'picture'
    }
  },
  data () {
    return {
      config: {
        base: {
          image: [
            'block',
            'max-w-full'
          ]
        }
      }
    }
  },
  computed: {
    usePicture () {
      return this.tag === 'picture'
    }
  }
}
