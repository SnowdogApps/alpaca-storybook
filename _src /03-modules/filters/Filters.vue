<template src="./Filters.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import ADivider from '../../templates/divider/Divider.vue'
import AActiveFilters from '../../03-modules/active-filters/ActiveFilters.vue'
import ASwatchFilter from '../swatch-filter/SwatchFilter.vue'
import ACheckboxFilter from '../checkbox-filter/CheckboxFilter.vue'
import AColorFilter from '../color-filter/ColorFilter.vue'

import AFilters from './Filters.js'

export default {
  name: 'AlpacaFilters',
  components: {
    AHeading,
    ADivider,
    AActiveFilters,
    AColorFilter,
    ASwatchFilter,
    ACheckboxFilter
  },
  mixins: [AFilters]
}
</script>

<style lang="scss" src="./Filters.scss" />
