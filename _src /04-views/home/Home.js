// @vue/component
export default {
  props: {
    mainBanner: {
      type: Object,
      required: true
    },
    smallBanners: {
      type: Array,
      required: true
    },
    mediumBanners: {
      type: Array,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    headingLevel: {
      type: Number,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    imageListElements: {
      type: Array,
      required: true
    }
  }
}
