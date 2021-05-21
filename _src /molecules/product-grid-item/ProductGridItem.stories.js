import { addDecorator, storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, number, object } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-vue-router'

import AProductGridItem from './ProductGridItem.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconFavoriteBorder from '../../atoms/icon/templates/IconFavoriteBorder.vue'
import ABadge from '../../atoms/badge/Badge.vue'
import ARating from '../../molecules/rating/Rating.vue'

const defaultPrices = {
  regularPrice: '$1684.00',
  specialPrice: '$100.00'
}
const defaultData = {
  methods: {
    addToCart: action('Added to Cart'),
    addToWishList: action('Added to Wishlist'),
    addToCompare: action('Added to Compare')
  }
}

addDecorator(StoryRouter())
storiesOf('Molecules/Product Grid Item', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AProductGridItem },
    props: {
      pricesKnob: {
        default: object('Product prices', defaultPrices)
      },
      badgeTextKnob: {
        default: text('Badge text', 'Sale!')
      },
      nameKnob: {
        default: text('Product name', 'Some product name - very long name because that is important')
      },
      imageUrlKnob: {
        default: text('Product image url', '/images/catalog-grid-item/product-1_320_312.jpg')
      }
    },
    ...defaultData,
    template: `
      <a-product-grid-item
        id="prod1"
        url="#"
        add-to-cart-text="Add to cart"
        add-to-wish-list-text="Add to wishlist"
        add-to-compare-text="Add to compare"
        :name="nameKnob"
        :prices="pricesKnob"
        :image-url="imageUrlKnob"
        :badge-text="badgeTextKnob"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @addToCompare="addToCompare"
      />
    `
  }))
  .add('With slots', () => ({
    components: {
      AProductGridItem,
      ABadge,
      AIcon,
      AIconFavoriteBorder,
      ARating
    },
    props: {
      pricesKnob: {
        default: object('Product prices', defaultPrices)
      },
      badgeTextKnob: {
        default: text('Badge text', 'New!')
      },
      nameKnob: {
        default: text('Product name', 'Ingrid Running Jacket')
      },
      imageUrlKnob: {
        default: text('Product image url', '/images/catalog-grid-item/product-1_320_312.jpg')
      },
      averageRatingKnob: {
        default: number('Average', 4.5)
      }
    },
    ...defaultData,
    template: `
      <a-product-grid-item
        id="prod1"
        url="#"
        add-to-cart-text="Add to cart"
        add-to-wish-list-text="Add to wishlist"
        add-to-compare-text="Add to compare"
        :name="nameKnob"
        :prices="pricesKnob"
        :image-url="imageUrlKnob"
        :badge-text="badgeTextKnob"
        @addToCart="addToCart"
        @addToWishList="addToWishList"
        @addToCompare="addToCompare"
      >
        <template #badge="badge">
          <a-badge
            class="a-product-grid-item__badge"
            style="display: flex; align-items: center;"
          >
            {{ badge.productBadgeText }}
            <a-icon
              style="margin-left: 8px;"
              title="Favorite border title"
            >
              <a-icon-favorite-border />
            </a-icon>
          </a-badge>
        </template>

        <template #image="image">
          <a href="/" style="display:block; overflow: hidden;">
            <img
              :src="image.productImageUrl"
              :alt="image.productImageAlt + ' image.'"
              class="a-product-grid-item__image"
            />
          </a>
        </template>

        <template #name="name">
          <strong>Product: </strong>
          <a
            :href="name.productUrl"
            class="a-product-grid-item__link a-product-grid-item__link--name"
          >
            {{ name.productName.toUpperCase() }}
          </a>
        </template>

        <template #rating>
          <a-rating :average="averageRatingKnob"/>
        </template>

        <template #prices="prices">
          {{ prices.productPrices.price }}
        </template>

        <template #addToCart="addToCart">
          <button
            type="button"
            @click="addToCart.productAddToCart"
            style="padding: 10px; border: none; border-radius: 5px; background: #00ff00;"
          >
            {{ addToCart.productAddToCartText }}
          </button>
        </template>
      </a-product-grid-item>
    `
  }))
