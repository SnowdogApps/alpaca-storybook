<template src="./LazyImage.html" />

<script>
import ALazyImage from './LazyImage.js'

export default {
  name: 'AlpacaLazyImage',
  mixins: [ALazyImage]
}
</script>
<style>
.image--loaded {
  @apply opacity-100;
}
</style>
