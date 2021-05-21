<template src="./Pagination.html" />

<script>
import AButton from '../../atoms/button/Button.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconArrowLeft from '../../atoms/icon/templates/IconArrowLeft.vue'
import AIconArrowRight from '../../atoms/icon/templates/IconArrowRight.vue'

import APagination from './Pagination.js'

export default {
  name: 'AlpacaPagination',
  components: {
    AButton,
    AIcon,
    AIconArrowLeft,
    AIconArrowRight
  },
  mixins: [APagination]
}
</script>

<style lang="scss" src="./Pagination.scss" />
