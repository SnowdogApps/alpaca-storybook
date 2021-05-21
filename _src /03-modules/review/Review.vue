<template src="./Review.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

import AReview from './Review.js'

export default {
  name: 'AlpacaReview',
  components: {
    AHeading,
    AParagraph
  },
  mixins: [AReview]
}
</script>

<style lang="scss" src="./Review.scss" />
