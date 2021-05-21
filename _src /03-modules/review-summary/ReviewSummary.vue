<template src="./ReviewSummary.html" />

<script>
import ALink from '../../atoms/link/Link.vue'
import AButton from '../../atoms/button/Button.vue'

import AReviewSummary from './ReviewSummary.js'

export default {
  name: 'AlpacaReviewSummary',
  components: {
    ALink,
    AButton
  },
  mixins: [AReviewSummary]
}
</script>

<style lang="scss" src="../review/Review.scss" />
