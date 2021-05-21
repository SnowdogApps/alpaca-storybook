<template src="./Input.html" />

<script>
import AInput from './Input.js'
import ALabel from '../../atoms/label/Label.vue'

export default {
  name: 'AlpacaInput',
  components: {
    ALabel
  },
  mixins: [AInput]
}
</script>

<style lang="scss" src="./Input.scss" />
