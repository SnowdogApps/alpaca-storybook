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
    },
    placeholderSrc: {
      type: String,
      default: null
    },
    imgLoadedClass: {
      type: String,
      default: 'image--loaded'
    }
  },
  data () {
    return {
      observer: null,
      intersected: false,
      loaded: false,
      config: {
        base: {
          image: [
            'block',
            'max-w-full',
            'opacity-0',
            'transition-opacity', 'duration-300', 'ease-linear'
          ]
        }
      }
    }
  },
  computed: {
    usePicture () {
      return this.tag === 'picture'
    },
    src () {
      return this.intersected && this.$attrs.src
        ? this.$attrs.src
        : this.placeholderSrc
    },
    srcset () {
      return this.intersected && this.$attrs.srcset
        ? this.$attrs.srcset
        : false
    }
  },
  mounted () {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(entries => {
        const image = entries[0]
        if (image.isIntersecting) {
          this.intersected = true
          this.observer.disconnect()
          /**
           * Triggered when image intersects the viewport
           * @type {Event}
           */
          this.$emit('intersect')
        }
      }, this.intersectionOptions)
      this.observer.observe(this.$el)
    }
  },
  destroyed () {
    if ('IntersectionObserver' in window) {
      this.observer.disconnect()
    }
  },
  methods: {
    error (event) {
      /**
       * Triggered when failed to load an image
       * @type {Event}
       */
      this.$emit('imageError', event)
    },
    load () {
      if (this.$el.getAttribute('src') !== this.srcPlaceholder) {
        this.loaded = true
        /**
         * Triggered when image defined in src is loaded
         * @type {Event}
         */
        this.$emit('load')
      }
    },
    loadPicture () {
      if (
        this.$refs.pictureImg &&
        this.$refs.pictureImg.getAttribute('src') !== this.srcPlaceholder
      ) {
        this.loaded = true
        this.$emit('load')
      }
    }
  }
}
