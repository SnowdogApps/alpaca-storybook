<template src="./Register.html" />

<script>
import AFieldset from '../../atoms/fieldset/Fieldset.vue'
import AButton from '../../atoms/button/Button.vue'

import ARegister from './Register.js'

export default {
  name: 'AlpacaRegister',
  components: {
    AFieldset,
    AButton
  },
  mixins: [ARegister]
}
</script>

<style lang="scss" src="./Register.scss" />
