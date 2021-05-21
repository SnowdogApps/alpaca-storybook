<template src="./ColorFilter.html" />

<script>
import AButton from '../../atoms/button/Button.vue'

import AColorFilter from './ColorFilter.js'

export default {
  name: 'AlpacaColorFilter',
  components: {
    AButton
  },
  mixins: [AColorFilter]
}
</script>

<style lang="scss" src="../filter/Filter.scss" />
