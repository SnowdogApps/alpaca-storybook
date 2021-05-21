<template src="./Login.html" />

<script>
import AFieldset from '../../atoms/fieldset/Fieldset.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../molecules/input/Input.vue'

import ALogin from './Login.js'

export default {
  name: 'AlpacaLogin',
  components: {
    AFieldset,
    AButton,
    AInput
  },
  mixins: [ALogin]
}
</script>

<style lang="scss" src="./Login.scss" />
