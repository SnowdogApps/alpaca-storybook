<template src="./Collapse.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AIconExpandMore from '../../atoms/icon/templates/IconExpandMore.vue'
import AButton from '../../atoms/button/Button.vue'
import ATransitionExpand from '../../atoms/transition-expand/TransitionExpand.vue'

import ACollapse from './Collapse.js'

export default {
  name: 'AlpacaCollapse',
  components: {
    AIcon,
    ATransitionExpand,
    AButton,
    AIconExpandMore
  },
  mixins: [ACollapse]
}
</script>

<style lang="scss" src="./Collapse.scss" />
