<template src="./SlideMenu.html" />

<script>
import AButton from '../../atoms/button/Button.vue'

import ASlideMenu from './SlideMenu.js'

export default {
  name: 'AlpacaSlideMenu',
  components: {
    AButton
  },
  mixins: [ASlideMenu]
}
</script>

<style lang="scss" src="./SlideMenu.scss" />
