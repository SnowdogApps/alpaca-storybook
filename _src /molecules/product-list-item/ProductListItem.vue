<template src="./ProductListItem.html" />

<script>
import AImage from '../../atoms/image/Image.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconDelete from '../../atoms/icon/templates/IconDelete.vue'
import APrice from '../../atoms/price/Price.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import AButton from '../../atoms/button/Button.vue'

import AProductListItem from './ProductListItem.js'

export default {
  name: 'AlpacaProductListItem',
  components: {
    AImage,
    AIcon,
    AIconDelete,
    APrice,
    AList,
    AListItem,
    AButton
  },
  mixins: [AProductListItem]
}
</script>

<style lang="scss" src="./ProductListItem.scss" />
