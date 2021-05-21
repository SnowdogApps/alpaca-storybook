<template src="./ForgotPassword.html" />

<script>
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../molecules/input/Input.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

import AForgotPassword from './ForgotPassword.js'

export default {
  name: 'AlpacaForgotPassword',
  components: {
    AButton,
    AInput,
    AParagraph
  },
  mixins: [AForgotPassword]
}
</script>

<style lang="scss" src="./ForgotPassword.scss" />
