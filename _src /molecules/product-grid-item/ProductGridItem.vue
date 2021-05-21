<template src="./ProductGridItem.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AIconFavoriteBorder from '../../atoms/icon/templates/IconFavoriteBorder.vue'
import AIconEqualizer from '../../atoms/icon/templates/IconEqualizer.vue'
import AButton from '../../atoms/button/Button.vue'
import ABadge from '../../atoms/badge/Badge.vue'
import APrice from '../../atoms/price/Price.vue'
import AImage from '../../atoms/image/Image.vue'
import ASwatch from '../../02-elements/swatch/Swatch.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

import AProductGridItem from './ProductGridItem.js'

export default {
  name: 'AlpacaProductGridItem',
  components: {
    AIcon,
    AIconFavoriteBorder,
    AIconEqualizer,
    AButton,
    ABadge,
    AImage,
    APrice,
    ASwatch,
    AList,
    AListItem
  },
  mixins: [AProductGridItem]
}
</script>

<style lang="scss" src="./ProductGridItem.scss" />
