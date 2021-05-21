<template src="./Message.html" />

<script>
import AButton from '../../atoms/button/Button.vue'

import AMessage from './Message.js'

export default {
  name: 'AlpacaMessage',
  components: { AButton },
  mixins: [AMessage]
}
</script>

<style lang="scss" src="./Message.scss" />
