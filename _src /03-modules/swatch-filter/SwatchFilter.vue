<template src="./SwatchFilter.html" />

<script>
import AButton from '../../atoms/button/Button.vue'

import ASwatchFilter from './SwatchFilter.js'

export default {
  name: 'AlpacaSwatchFilter',
  components: {
    AButton
  },
  mixins: [ASwatchFilter]
}
</script>

<style lang="scss" src="../filter/Filter.scss" />
