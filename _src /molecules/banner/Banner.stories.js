import { storiesOf } from '@storybook/vue'
import { object, text } from '@storybook/addon-knobs'

import ABanner from './Banner.vue'

const info = '<p>Check <b>Knobs</b> tab to edit component properties dynamically.</p>'

const sources = [
  {
    id: 'image_1',
    srcset: '/images/banner/banner-320_176.jpg',
    media: '(max-width: 480px)'
  },
  {
    id: 'image_2',
    srcset: '/images/banner/banner-768_416.jpg',
    media: '(max-width: 960px)'
  },
  {
    id: 'image_3',
    srcset: '/images/banner/banner-1024_416.jpg',
    media: '(max-width: 1328px)'
  },
  {
    id: 'image_4',
    srcset: '/images/banner/banner-1920_512.jpg',
    media: ''
  }
]

storiesOf('Molecules/Banner', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ABanner },
    props: {
      imageKnobs: {
        default: object('Image', '/images/banner/banner-320_176.jpg')
      },
      altKnobs: {
        default: object('Alt', 'Banner image')
      },
      sourcesKnobs: {
        default: object('Sources', sources)
      },
      ariaLabelKnobs: {
        default: text('Aria label', 'Banner')
      },
      hrefKnobs: {
        default: text('Href', '#')
      }
    },
    template: `
      <a-banner
        :href="hrefKnobs"
        :aria-label="ariaLabelKnobs"
        :image-src="imageKnobs"
        :image-alt="altKnobs"
        :sources="sourcesKnobs"
      />
    `
  }))
  .add('With text', () => ({
    components: { ABanner },
    props: {
      imageKnobs: {
        default: object('Image', '/images/image/banner.jpg')
      },
      altKnobs: {
        default: object('Alt', 'Banner image')
      },
      textKnobs: {
        default: text('Text', 'Banner')
      },
      ariaLabelKnobs: {
        default: text('Aria label', 'Banner')
      },
      hrefKnobs: {
        default: text('Href', '#')
      }
    },
    template: `
      <a-banner
        :href="hrefKnobs"
        :aria-label="ariaLabelKnobs"
        :image-src="imageKnobs"
        :image-alt="altKnobs"
        tag="div"
      >
        <span style="color: white; font-size: 48px; font-weight: bold;">
          {{ textKnobs }}
        </span>
      </a-banner>
    `
  }))
