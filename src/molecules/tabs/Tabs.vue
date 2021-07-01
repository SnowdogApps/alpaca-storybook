<template src="./Tabs.html" />

<script>
import ATabs from './Tabs.js'
import AButton from '@atoms/button/Button.vue'
import AIconExpandMore from '@atoms/icon/templates/IconExpandMore.vue'

export default {
  components: {
    AButton,
    AIconExpandMore
  },
  mixins: [ATabs]
}
</script>
