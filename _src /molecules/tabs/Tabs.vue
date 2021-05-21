<template src="./Tabs.html" />

<script>
import ATabs from './Tabs.js'

import AButton from '../../atoms/button/Button.vue'

export default {
  components: { AButton },
  mixins: [ATabs]
}
</script>

<style lang="scss" src="./Tabs.scss" />
