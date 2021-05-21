<template src="./Logo.html" />

<script>
import AImage from '../../atoms/image/Image.vue'

import ALogo from './Logo.js'

export default {
  name: 'AlpacaLogo',
  components: { AImage },
  mixins: [ALogo]
}
</script>

<style lang="scss" src="./Logo.scss" />
