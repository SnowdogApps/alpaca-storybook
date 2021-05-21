// @vue/component
export default {
  props: {
    /**
     * Props for custom tag
     */
    tag: {
      type: String,
      default: 'a'
    },
    /**
     *  Image alt
     */
    imageAlt: {
      type: String,
      required: true
    },
    /**
     *  Image src
     */
    imageSrc: {
      type: String,
      required: true
    },
    /**
     * Props for source should have keys: id, srcset, media
     */
    sources: {
      type: Array,
      default: null
    },
    /**
     * Text on banner
     */
    text: {
      type: String,
      default: null
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    }
  }
}
