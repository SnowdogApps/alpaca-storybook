<template src="./Home.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AImage from '../../atoms/image/Image.vue'
import ABanner from '../../molecules/banner/Banner.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

import AHome from './Home.js'

export default {
  name: 'AlpacaHome',
  components: {
    AImage,
    AHeading,
    ABanner,
    AList,
    AListItem
  },
  mixins: [AHome]
}
</script>

<style lang="scss" src="./Home.scss" />
