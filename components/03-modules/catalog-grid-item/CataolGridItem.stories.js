import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import data from './mocks/catalogGridItem.json'

import App from '../../01-globals/app/App.vue'
import AlpacaCatalogGridItem from './CatalogGridItem.vue'

storiesOf('Modules/Catalog grid item', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: { App, AlpacaCatalogGridItem },
    data: () => ({
      data
    }),
    template: `
      <app>
        <alpaca-catalog-grid-item
          :badge="data.badge"
          :image="data.image.dataSrc"
          :alt="data.image.alt"
          :name="data.name"
          :url="data.url"
          :product="data.product"
          @addToCart="addToCart"
          @addToWishList="addToWishList"
          @compare="compare"
        />
      </app>
    `,
    methods: {
      addToCart: action('Added to cart'),
      addToWishList: action('Added to wish list'),
      compare: action('Compared')
    }
  }))
