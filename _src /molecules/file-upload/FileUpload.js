// @vue/component
export default {
  props: {
    /**
     * File input id
     */
    inputId: {
      type: String,
      default: 'file'
    },
    /**
     * File input name
     */
    inputName: {
      type: String,
      default: 'file'
    },
    /**
     * Custom input class
     */
    inputClass: {
      type: String,
      default: null
    },
    /**
     * Top title
     */
    title: {
      type: String,
      default: null
    },
    /**
     * Button text
     */
    buttonText: {
      type: String,
      default: null
    },
    /**
     * Error text
     */
    errorText: {
      type: String,
      default: null
    },
    /**
     * File name placeholder text
     */
    emptyText: {
      type: String,
      default: null
    },
    /**
     * List of accepted file types separated by a comma
     */
    acceptedFormats: {
      type: String,
      default: null
    },
    /**
     * Max file size in bytes
     */
    maxSize: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      fileName: '',
      error: false
    }
  },
  methods: {
    chooseFile () {
      this.$refs.fileInput.click()
    },
    updateFile () {
      const file = this.$refs.fileInput.files[0]
      if (file && this.maxSize && file.size > this.maxSize) {
        this.error = true
        return false
      }
      this.error = false
      this.fileName = file ? file.name : null
      if (this.fileName) {
        this.$refs.fileName.focus()
      }
    }
  }
}
