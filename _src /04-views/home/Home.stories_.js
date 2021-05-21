import { storiesOf } from '@storybook/vue'

import AHome from './Home.vue'

import imageListElements from './mocks/imageListElements.json'
import text from './mocks/text.json'

storiesOf('Views/Home', module)
  // @vue/component
  .add('Default', () => ({
    components: { AHome },
    data () {
      return {
        imageListElements,
        text,
        mainBanner: {
          link: {
            href: '#',
            ariaLabel: 'Banner'
          },
          image: {
            src: '/images/banner/banner-320_176.jpg',
            alt: 'Banner image'
          },
          sources: [
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
        },
        smallBanners: [
          {
            id: 'src1',
            link: {
              href: '#',
              ariaLabel: 'Small banner men'
            },
            image: {
              src: '/images/home/banners/banner-small-men_432-248.jpg',
              alt: 'Banner men'
            },
            sources: [
              {
                id: 'image_man_1',
                srcset: '/images/home/banners/banner-small-men_432-248.jpg',
                media: '(max-width: 768px)'
              },
              {
                id: 'image_man_2',
                srcset: '/images/home/banners/banner-small-men_304-184.jpg',
                media: '(max-width: 1024px)'
              },
              {
                id: 'image_man_3',
                srcset: '/images/home/banners/banner-small-men_432-248.jpg',
                media: ''
              }
            ]
          },
          {
            id: 'src2',
            link: {
              href: '#',
              ariaLabel: 'Small banner women'
            },
            image: {
              src: '/images/home/banners/banner-small-women_432-248.jpg',
              alt: 'Banner women'
            },
            sources: [
              {
                id: 'image_woman_1',
                srcset: '/images/home/banners/banner-small-women_432-248.jpg',
                media: '(max-width: 768px)'
              },
              {
                id: 'image_woman_2',
                srcset: '/images/home/banners/banner-small-women_304-184.jpg',
                media: '(max-width: 1024px)'
              },
              {
                id: 'image_woman_3',
                srcset: '/images/home/banners/banner-small-women_432-248.jpg',
                media: ''
              }
            ]
          },
          {
            id: 'src3',
            link: {
              href: '#',
              ariaLabel: 'Small banner gear'
            },
            image: {
              src: '/images/home/banners/banner-small-gear_432-248.jpg',
              alt: 'Banner gear'
            },
            sources: [
              {
                id: 'image_gear_1',
                srcset: '/images/home/banners/banner-small-gear_432-248.jpg',
                media: '(max-width: 768px)'
              },
              {
                id: 'image_gear_2',
                srcset: '/images/home/banners/banner-small-gear_304-184.jpg',
                media: '(max-width: 1024px)'
              },
              {
                id: 'image_gear_3',
                srcset: '/images/home/banners/banner-small-gear_432-248.jpg',
                media: ''
              }
            ]
          }
        ],
        mediumBanners: [
          {
            id: 'src4',
            link: {
              href: '#',
              ariaLabel: 'Medium banner new'
            },
            image: {
              src: '/images/home/banners/banner-medium-new_304-176.jpg',
              alt: 'Banner new collection'
            },
            sources: [
              {
                id: 'image_new_1',
                srcset: '/images/home/banners/banner-medium-new_304-176.jpg',
                media: '(max-width: 480px)'
              },
              {
                id: 'image_new_2',
                srcset: '/images/home/banners/banner-medium-new_752-360.jpg',
                media: '(max-width: 1024px)'
              },
              {
                id: 'image_new_3',
                srcset: '/images/home/banners/banner-medium-new_464-256.jpg',
                media: '(max-width: 2080px)'
              }
            ]
          },
          {
            id: 'src5',
            link: {
              href: '#',
              ariaLabel: 'Medium banner discover'
            },
            image: {
              src: '/images/home/banners/banner-medium-discover_304-176.jpg',
              alt: 'Banner discover collection'
            },
            sources: [
              {
                id: 'image_discover_1',
                srcset: '/images/home/banners/banner-medium-discover_304-176.jpg',
                media: '(max-width: 480px)'
              },
              {
                id: 'image_discover_2',
                srcset: '/images/home/banners/banner-medium-discover_752-360.jpg',
                media: '(max-width: 1024px)'
              },
              {
                id: 'image_discover_3',
                srcset: '/images/home/banners/banner-medium-discover_464-256.jpg',
                media: '(max-width: 2080px)'
              },
              {
                id: 'image_discover_4',
                srcset: '/images/home/banners/banner-medium-discover_656-360.jpg',
                media: ''
              }
            ]
          }
        ]
      }
    },
    template: `
      <a-home
        :text="text.text"
        :headingLevel="2"
        heading="BRANDS"
        :image-list-elements="imageListElements"
        :main-banner="mainBanner"
        :small-banners="smallBanners"
        :medium-banners="mediumBanners"
      />
    `
  }))
