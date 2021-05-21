<template src="./AdditionalContent.html" />

<script>
import APicture from '../../03-modules/picture/Picture.vue'

import AAdditionalContent from './AdditionalContent.js'

export default {
  name: 'AlpacaAdditionalContent',
  components: {
    APicture
  },
  mixins: [AAdditionalContent]
}
</script>

<style lang="scss" src="./AdditionalContent.scss" />
