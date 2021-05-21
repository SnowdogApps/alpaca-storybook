<template src="./Range.html" />

<script>
import vueSlider from 'vue-slider-component'
import AButton from '../../atoms/button/Button.vue'

import ARange from './Range.js'

export default {
  name: 'AlpacaRange',
  components: {
    vueSlider,
    AButton
  },
  mixins: [ARange]
}
</script>

<style lang="scss" src="./Range.scss" />
