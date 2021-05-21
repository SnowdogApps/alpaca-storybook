<template src="./BriefInfo.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'

import ABriefInfo from './BriefInfo.js'

export default {
  name: 'AlpacaBriefInfo',
  components: {
    AHeading
  },
  mixins: [ABriefInfo]
}
</script>

<style lang="scss" src="./BriefInfo.scss" />
