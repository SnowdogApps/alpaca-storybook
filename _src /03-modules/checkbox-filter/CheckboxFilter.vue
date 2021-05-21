<template src="./CheckboxFilter.html" />

<script>
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'

import ACheckboxFilter from './CheckboxFilter.js'

export default {
  name: 'AlpacaCheckboxFilter',
  components: {
    ACheckbox
  },
  mixins: [ACheckboxFilter]
}
</script>

<style lang="scss" src="../filter/Filter.scss" />
