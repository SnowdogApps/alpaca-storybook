// @vue/component
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    horizontal: {
      type: Boolean,
      default: null
    },
    productLabel: {
      type: Object,
      default: null
    },
    mainImage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      currentImage:
        this.mainImage === 0
          ? this.mainImage
          : this.mainImage >= this.images.length
            ? this.images.length - 1
            : this.mainImage - 1
    }
  },
  computed: {
    selectedImage () {
      return this.images[this.currentImage]
    }
  },
  methods: {
    setCurrentImage (val) {
      if (this.images[val]) {
        this.currentImage = val
      }
    }
  }
}
