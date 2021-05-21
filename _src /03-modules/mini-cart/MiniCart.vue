<template src="./MiniCart.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AList from '../../atoms/list/List.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../molecules/input/Input.vue'

import AMiniCart from './MiniCart.js'

export default {
  name: 'AlpacaMiniCart',
  components: {
    AHeading,
    AList,
    AButton,
    AInput
  },
  mixins: [AMiniCart]
}
</script>

<style lang="scss" src="./MiniCart.scss" />
