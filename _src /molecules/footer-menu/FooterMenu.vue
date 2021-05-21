<template src="./FooterMenu.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AIconExpandMore from '../../atoms/icon/templates/IconExpandMore.vue'
import ALink from '../../atoms/link/Link.vue'
import AButton from '../../atoms/button/Button.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import ACollapse from '../../molecules/collapse/Collapse.vue'

import AFooter from './FooterMenu.js'

export default {
  name: 'AlpacaFooter',
  components: {
    AButton,
    ALink,
    AIcon,
    AIconExpandMore,
    AList,
    AListItem,
    ACollapse
  },
  mixins: [AFooter]
}
</script>

<style lang="scss" src="./FooterMenu.scss" />
