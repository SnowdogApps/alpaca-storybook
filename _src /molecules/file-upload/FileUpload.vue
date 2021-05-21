<template src="./FileUpload.html" />

<script>
import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'

import AFileUpload from './FileUpload.js'

export default {
  name: 'AlpacaFileUpload',
  components: {
    AButton,
    ALabel
  },
  mixins: [AFileUpload]
}
</script>

<style lang="scss" src="./FileUpload.scss" />
