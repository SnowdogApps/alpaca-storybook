<template src="./Alert.html" />

<script>
import AAlert from './Alert.js'

import AIcon from '../../atoms/icon/Icon.vue'
import AIconClose from '../../atoms/icon/templates/IconClose.vue'
import AButton from '../../atoms/button/Button.vue'

export default {
  name: 'AlpacaAlert',
  components: {
    AIcon,
    AIconClose,
    AButton
  },
  mixins: [AAlert]
}
</script>

<style lang="scss" src="./Alert.scss" />
