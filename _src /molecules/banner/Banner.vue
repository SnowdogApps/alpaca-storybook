<template src="./Banner.html" />

<script>
import AImage from '../../atoms/image/Image.vue'

import ABanner from './Banner.js'

export default {
  name: 'AlpacaBanner',
  components: {
    AImage
  },
  mixins: [ABanner]
}
</script>

<style lang="scss" src="./Banner.scss" />
