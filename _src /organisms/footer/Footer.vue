<template src="./Footer.html" />

<script>
import AContainer from '../../atoms/container/Container.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconExpandLess from '../../atoms/icon/templates/IconExpandLess.vue'
import AButton from '../../atoms/button/Button.vue'
import ACookieMessage from '../../molecules/cookie-message/CookieMessage.vue'
import AFooterMenu from '../../molecules/footer-menu/FooterMenu.vue'
import ANewsletter from '../../molecules/newsletter/Newsletter.vue'

import AFooter from './Footer.js'

export default {
  name: 'AlpacaFooter',
  components: {
    AButton,
    AContainer,
    AIcon,
    AIconExpandLess,
    ACookieMessage,
    AFooterMenu,
    ANewsletter
  },
  mixins: [AFooter]
}
</script>

<style lang="scss" src="./Footer.scss" />
