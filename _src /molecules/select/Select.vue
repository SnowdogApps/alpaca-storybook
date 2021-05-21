<template src="./Select.html" />

<script>
import ASelect from './Select.js'

import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    ALabel
  },
  mixins: [ASelect]
}
</script>

<style lang="scss" src="./Select.scss" />
