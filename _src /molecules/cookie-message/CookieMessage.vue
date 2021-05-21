<template src="./CookieMessage.html" />

<script>
import ACookieMessage from './CookieMessage.js'

import AIcon from '../../atoms/icon/Icon.vue'
import AIconClose from '../../atoms/icon/templates/IconClose.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  name: 'AlpacaCookieMessage',
  components: {
    AIcon,
    AIconClose,
    AButton
  },
  mixins: [ACookieMessage]
}
</script>

<style lang="scss" src="./CookieMessage.scss" />
