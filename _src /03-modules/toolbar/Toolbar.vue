<template src="./Toolbar.html" />

<script>
import ASelect from '../../molecules/select/Select.vue'
import AButton from '../../atoms/button/Button.vue'
import APager from '../../molecules/pagination/Pagination.vue'

import AToolbar from './Toolbar.js'

export default {
  name: 'AlpacaToolbar',
  components: {
    ASelect,
    AButton,
    APager
  },
  mixins: [AToolbar]
}
</script>

<style lang="scss" src="./Toolbar.scss" />
