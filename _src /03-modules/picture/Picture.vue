<template src="./Picture.html" />

<script>
import AImage from '../../atoms/image/Image.vue'

import APicture from './Picture.js'

export default {
  name: 'AlpacaPicture',
  components: {
    AImage
  },
  mixins: [APicture]
}
</script>
