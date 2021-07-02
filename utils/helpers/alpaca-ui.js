var alpacaUIMixin = {
  computed: {
    alpacaConfig () {
      const config = this.$options.config
      return config
    }
  },
  props: {
    variant: {
      type: [String, Array],
      default: ''
    }
  },
  methods: {
    getClass (el) {
      const styles = this.alpacaConfig
      const baseStyles = styles.base
      const primaryStyles = styles.primary
      let variantStyles
      let classes = []

      if (baseStyles) {
        classes = [...baseStyles[el]]
      }

      if (this.variant.length === 0) {
        primaryStyles && classes.push(primaryStyles[el])
      } else if (typeof this.variant === 'string' && this.variant !== 'none') {
        variantStyles = styles[this.variant]
        variantStyles && classes.push(variantStyles[el])
      } else if (typeof this.variant === 'object') {
        this.variant.forEach(item => {
          variantStyles = styles[item]
          variantStyles && classes.push(variantStyles[el])
        })
      }

      return classes
    }
  }
}
exports.alpacaUIMixin = alpacaUIMixin

function AlpacaUI (Vue) {
  Vue.mixin(alpacaUIMixin)
}

var _default = AlpacaUI
exports.default = _default
