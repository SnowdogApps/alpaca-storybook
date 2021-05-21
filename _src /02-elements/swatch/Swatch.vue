<template src="./Swatch.html" />

<script>
import ALabel from '../../atoms/label/Label.vue'

import ASwatch from './Swatch.js'

export default {
  name: 'AlpacaSwatch',
  components: {
    ALabel
  },
  mixins: [ASwatch]
}
</script>

<style lang="scss" src="./Swatch.scss" />
