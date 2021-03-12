export default {
  props: {
    variant: {
      type: [String, Array],
      default: ''
    }
  },
  methods: {
    getClass (el) {
      const styles = this.config
      const baseStyles = styles.base
      let variantStyles
      let classes = []

      if (baseStyles) {
        classes = [...baseStyles[el]]
      }

      if (typeof this.variant === 'string') {
        variantStyles = styles[this.variant]
        variantStyles && classes.push(variantStyles[el])
      } else {
        this.variant.forEach(item => {
          variantStyles = styles[item]
          variantStyles && classes.push(variantStyles[el])
        })
      }

      return classes
    }
  }
}
