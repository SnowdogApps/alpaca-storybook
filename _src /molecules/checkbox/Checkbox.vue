<template src="./Checkbox.html" />

<script>
import ACheckbox from './Checkbox.js'

import AIcon from '../../atoms/icon/Icon.vue'
import AIconCheck from '../../atoms/icon/templates/IconCheck.vue'

export default {
  components: { AIcon, AIconCheck },
  mixins: [ACheckbox]
}
</script>

<style lang="scss" src="./Checkbox.scss" />
