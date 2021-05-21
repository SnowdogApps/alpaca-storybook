<template src="./Radio.html" />

<script>
import ARadio from './Radio.js'

import ALabel from '../../atoms/label/Label.vue'

export default {
  components: { ALabel },
  mixins: [ARadio]
}
</script>

<style lang="scss" src="./Radio.scss" />
