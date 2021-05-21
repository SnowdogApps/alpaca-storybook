<template src="./Modal.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AButton from '../../atoms/button/Button.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconClose from '../../atoms/icon/templates/IconClose.vue'
import ADivider from '../../templates/divider/Divider.vue'

import AModal from './Modal.js'

export default {
  name: 'AlpacaModal',
  components: {
    AIcon,
    AIconClose,
    ADivider,
    AHeading,
    AButton
  },
  mixins: [AModal]
}
</script>

<style lang="scss" src="./Modal.scss" />
