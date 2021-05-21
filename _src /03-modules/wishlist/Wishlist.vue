<template src="./Wishlist.html" />

<script>
import AList from '../../atoms/list/List.vue'

import AWishlist from './Wishlist.js'

export default {
  name: 'AlpacaWishlist',
  components: {
    AList
  },
  mixins: [AWishlist]
}
</script>

<style lang="scss" src="./Wishlist.scss" />
