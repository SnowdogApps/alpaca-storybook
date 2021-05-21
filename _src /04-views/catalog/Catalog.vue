<template src="./Catalog.html" />

<script>
import AContainer from '../../atoms/container/Container.vue'
import AFilters from '../../03-modules/filters/Filters.vue'
import AGridItem from '../../03-modules/catalog-grid-item/CatalogGridItem.vue'
import ABreadcrumbs from '../../atoms/breadcrumbs/Breadcrumbs.vue'
import AToolbar from '../../03-modules/toolbar/Toolbar.vue'

import ACatalog from './Catalog.js'

export default {
  name: 'AlpacaCatalog',
  components: {
    AContainer,
    AFilters,
    AGridItem,
    ABreadcrumbs,
    AToolbar
  },
  mixins: [ACatalog]
}
</script>

<style lang="scss" src="./Catalog.scss" />
