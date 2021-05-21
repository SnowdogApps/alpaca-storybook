<template src="./Newsletter.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import ALabel from '../../atoms/label/Label.vue'
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'
import AButton from '../../atoms/button/Button.vue'

import ANewsletter from './Newsletter.js'

export default {
  name: 'AlpacaNewsletter',
  components: {
    AHeading,
    ALabel,
    ACheckbox,
    AButton
  },
  mixins: [ANewsletter]
}
</script>

<style lang="scss" src="./Newsletter.scss" />
