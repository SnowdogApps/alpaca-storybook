<template src="./RadioWrapper.html" />

<script>
import ARadioWrapper from './RadioWrapper.js'

import AFieldset from '../../atoms/fieldset/Fieldset.vue'

export default {
  components: { AFieldset },
  mixins: [ARadioWrapper]
}
</script>

<style lang="scss" src="./RadioWrapper.scss" />
