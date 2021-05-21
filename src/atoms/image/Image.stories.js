import AImage from './Image.vue'
import ALazyImage from './LazyImage.vue'

export default {
  title: 'Atoms/Image',
  components: {
    AImage,
    ALazyImage
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    },
    tag: {
      control: {
        type: 'text'
      }
    },
    alt: {
      control: {
        type: 'text'
      }
    },
    placeholderSrc: {
      control: {
        type: 'text'
      }
    }
  }
}

const sources = [
  {
    src: 'images/image/banner-480_480.png',
    width: '480px'
  },
  {
    src: 'images/image/banner-768_402.png',
    width: '768px'
  },
  {
    src: 'images/image/banner-992_254.png',
    width: '992px'
  }
]

const TemplateImage = (args, { argTypes }) => ({
  components: { AImage },
  props: Object.keys(argTypes),
  template: `
    <a-image
      v-bind="$props"
    />
  `
})

const TemplatePicture = (args, { argTypes }) => ({
  components: { AImage },
  props: Object.keys(argTypes),
  template: `
    <a-image
      v-bind="$props"
    >
      <source
        srcset="${sources[0].src}"
        media="(max-width: ${sources[0].width})"
      >
      <source
        srcset="${sources[1].src}"
        media="(max-width: ${sources[1].width})"
      >
      <source
        srcset="${sources[2].src}"
        media="(max-width: ${sources[2].width})"
      >
    </a-image>
  `
})

export const Image = TemplateImage.bind({})
Image.args = {
  tag: 'img',
  src: 'images/image/banner.jpg',
  alt: 'alt text goes here'
}

export const Picture = TemplatePicture.bind({})
Picture.args = {
  tag: 'picture',
  src: 'images/image/banner.jpg',
  alt: 'alt text goes here'
}

const TemplateLazyImage = (args, { argTypes }) => ({
  components: { ALazyImage },
  props: Object.keys(argTypes),
  template: `
    <a-lazy-image
      v-bind="$props"
      class="mt-80"
    />
  `
})

export const LazyImage = TemplateLazyImage.bind({})
LazyImage.args = {
  tag: 'img',
  src: 'images/image/banner.jpg',
  alt: 'alt text goes here'
}

export const LazyImageWithPlaceholder = TemplateLazyImage.bind({})
LazyImageWithPlaceholder.args = {
  tag: 'img',
  src: 'images/image/banner.jpg',
  alt: 'alt text goes here',
  placeholderSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAG0lEQVQYV2M8c+bMfwZGRgbGs2fO/v/P8J8BAFA1CMsVPhxYAAAAAElFTkSuQmCC'
}

const TemplateLazyPicture = (args, { argTypes }) => ({
  components: { ALazyImage },
  props: Object.keys(argTypes),
  template: `
    <a-lazy-image
      v-bind="$props"
      class="mt-80"
    >
      <source
        srcset="${sources[0].src}"
        media="(max-width: ${sources[0].width})"
      >
      <source
        srcset="${sources[1].src}"
        media="(max-width: ${sources[1].width})"
      >
      <source
        srcset="${sources[2].src}"
        media="(max-width: ${sources[2].width})"
      >
      <template v-slot:placeholder>
        <span>Placeholder slot</span>
      </template>
    </a-lazy-image>
  `
})
export const LazyPicture = TemplateLazyPicture.bind({})
LazyPicture.args = {
  tag: 'picture',
  src: 'images/image/banner.jpg',
  alt: 'alt text goes here'
}
export const LazyPictureWithPlaceholder = TemplateLazyPicture.bind({})
LazyPictureWithPlaceholder.args = {
  tag: 'picture',
  src: 'images/image/banner.jpg',
  alt: 'alt text goes here',
  placeholderSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAG0lEQVQYV2M8c+bMfwZGRgbGs2fO/v/P8J8BAFA1CMsVPhxYAAAAAElFTkSuQmCC'
}
