<template src="./Breadcrumbs.html" />

<script>
import ALink from '@atoms/link/Link.vue'
import ABreadcrumbs from './Breadcrumbs.js'

export default {
  name: 'AlpacaBreadcrumbs',
  components: { ALink },
  mixins: [ABreadcrumbs]
}
</script>
