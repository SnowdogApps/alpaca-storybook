<template src="./ReviewAdd.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'
import AButton from '../../atoms/button/Button.vue'
import AInput from '../../molecules/input/Input.vue'
import ATextarea from '../../atoms/textarea/Textarea.vue'
import AFieldset from '../../atoms/fieldset/Fieldset.vue'

import AReviewAdd from './ReviewAdd.js'

export default {
  name: 'AlpacaReviewAdd',
  components: {
    AHeading,
    AParagraph,
    AButton,
    AInput,
    AFieldset,
    ATextarea
  },
  mixins: [AReviewAdd]
}
</script>

<style lang="scss" src="../review/Review.scss" />
