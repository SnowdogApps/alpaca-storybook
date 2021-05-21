<template src="./Slider.html" />

<script>
import { Carousel } from 'vue-carousel'

import ASlider from './Slider.js'

export default {
  name: 'AlpacaSlider',
  components: {
    Carousel
  },
  mixins: [ASlider]
}
</script>

<style lang="scss" src="./Slider.scss" />
