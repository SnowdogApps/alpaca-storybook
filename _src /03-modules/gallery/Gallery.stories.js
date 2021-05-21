import { storiesOf } from '@storybook/vue'

import AGallery from './Gallery.vue'

import gallery from './mocks/gallery.json'

storiesOf('Modules/Gallery', module)
  // @vue/component
  .add('Default', () => ({
    components: { AGallery },
    data: () => ({
      gallery
    }),
    template: `
      <a-gallery
        :images="gallery.images"
      />
    `
  }))
  // @vue/component
  .add('Horizontal', () => ({
    components: { AGallery },
    data: () => ({
      gallery
    }),
    template: `
      <a-gallery
        :images="gallery.images"
        horizontal
      />
    `
  }))
  // @vue/component
  .add('With label', () => ({
    components: { AGallery },
    data: () => ({
      gallery
    }),
    template: `
      <a-gallery
        :productLabel="gallery.productLabel"
        :images="gallery.images"
      />
    `
  }))
