<template src="./ProductView.html" />

<script>
import AContainer from '../../atoms/container/Container.vue'
import AHeading from '../../atoms/heading/Heading.vue'
import ABreadcrumbs from '../../atoms/breadcrumbs/Breadcrumbs.vue'
import AButton from '../../atoms/button/Button.vue'
import APrice from '../../atoms/price/Price.vue'
import ASwatch from '../../02-elements/swatch/Swatch.vue'
import ATabContent from '../../02-elements/tab-content/TabContent.vue'
import AAdditionalContent from '../../03-modules/additional-content/AdditionalContent.vue'
import AGallery from '../../03-modules/gallery/Gallery.vue'
import ABriefInfo from '../../03-modules/brief-info/BriefInfo.vue'
import AReviewSummary from '../../03-modules/review-summary/ReviewSummary.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'
import ASlider from '../../03-modules/slider/Slider.vue'
import { Slide } from 'vue-carousel'

import AProductView from './ProductView.js'

export default {
  name: 'AlpacaProductView',
  components: {
    AContainer,
    AHeading,
    ABreadcrumbs,
    AButton,
    APrice,
    ASwatch,
    ATabContent,
    AAdditionalContent,
    AGallery,
    ABriefInfo,
    AReviewSummary,
    AQuantityUpdate,
    ASlider,
    Slide
  },
  mixins: [AProductView]
}
</script>

<style lang="scss" src="./ProductView.scss" />
