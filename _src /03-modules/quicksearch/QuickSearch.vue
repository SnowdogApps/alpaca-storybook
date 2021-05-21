<template src="./QuickSearch.html" />

<script>
import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import ALink from '../../atoms/link/Link.vue'
import AHeading from '../../atoms/heading/Heading.vue'
import AImage from '../../atoms/image/Image.vue'
import AButton from '../../atoms/button/Button.vue'
import APrice from '../../atoms/price/Price.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

import AQuickSearch from './QuickSearch.js'

export default {
  name: 'AlpacaQuickSearch',
  components: {
    AParagraph,
    ALink,
    AHeading,
    AImage,
    AButton,
    APrice,
    AList,
    AListItem
  },
  mixins: [AQuickSearch]
}
</script>

<style lang="scss" src="./QuickSearch.scss" />
