<template src="./ActiveFilters.html" />

<script>
import AList from '../../atoms/list/List.vue'
import AButton from '../../atoms/button/Button.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

import AActiveFilters from './ActiveFilters.js'

export default {
  name: 'AlpacaActiveFilters',
  components: {
    AList,
    AButton,
    AListItem
  },
  mixins: [AActiveFilters]
}
</script>

<style lang="scss" src="./ActiveFilters.scss" />
