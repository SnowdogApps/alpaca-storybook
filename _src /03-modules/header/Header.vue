<template src="./Header.html" />

<script>
import AContainer from '../../atoms/container/Container.vue'
import ALogo from '../../molecules/logo/Logo.vue'
import AButton from '../../atoms/button/Button.vue'
import AMegaMenu from '../../03-modules/mega-menu/MegaMenu.vue'
import AHeaderButton from '../../03-modules/header-button/HeaderButton.vue'
import AHeaderSearch from '../../03-modules/header-search/HeaderSearch.vue'
import ASideMenu from '../../03-modules/side-menu/SideMenu.vue'

import AHeader from './Header.js'

export default {
  name: 'AlpacaHeader',
  components: {
    AContainer,
    ALogo,
    AButton,
    AMegaMenu,
    AHeaderButton,
    AHeaderSearch,
    ASideMenu
  },
  mixins: [AHeader]
}
</script>

<style lang="scss" src="./Header.scss" />
