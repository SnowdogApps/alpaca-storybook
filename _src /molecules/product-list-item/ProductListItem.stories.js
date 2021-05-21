import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, object } from '@storybook/addon-knobs'

import AProductListItem from './ProductListItem.vue'
import ALabel from '../../atoms/label/Label.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'

const info = '<p>Check <b>Knobs</b> tab to edit component properties dynamically.</p>'

const defaultOptions = [
  {
    id: 'size_id_1',
    label: 'Size',
    value: 'XXL'
  },
  {
    id: 'color_id_1',
    label: 'Color',
    value: 'Red'
  }
]
const defaultPrices = {
  specialPrice: '$100,00',
  regularPrice: '$299,99'
}

storiesOf('Molecules/Product List Item', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AProductListItem },
    props: {
      nameKnob: {
        default: text('Product name', 'Ingrid Running Jacket')
      },
      imageUrlKnob: {
        default: text('Product image url', '/images/product/cart-product-160_160.jpg')
      },
      pricesKnob: {
        default: object('Product prices', defaultPrices)
      },
      optionsKnob: {
        default: object('Product options', defaultOptions)
      }
    },
    methods: {
      removeMethod: action('Remove')
    },
    template: `
      <a-product-list-item
        id="prod1"
        url="#"
        :name="nameKnob"
        :image-url="imageUrlKnob"
        :prices="pricesKnob"
        :options="optionsKnob"
        remove-button-aria-label="Remove this product from your shopping cart"
        action-icon-title="Action title"
        @remove="removeMethod"
      />
    `
  }))
  .add('With Qty Updater', () => ({
    components: {
      AProductListItem,
      AQuantityUpdate,
      ALabel
    },
    props: {
      nameKnob: {
        default: text('Product name', 'Ingrid Running Jacket')
      },
      imageUrlKnob: {
        default: text('Product image url', '/images/product/cart-product-160_160.jpg')
      },
      pricesKnob: {
        default: object('Product prices', defaultPrices)
      },
      optionsKnob: {
        default: object('Product options', defaultOptions)
      }
    },
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    },
    template: `
      <a-product-list-item
        id="prod1"
        url="#"
        :name="nameKnob"
        :image-url="imageUrlKnob"
        :prices="pricesKnob"
        :options="optionsKnob"
        remove-button-aria-label="Remove this product from your shopping cart"
        action-icon-title="Action title"
        @remove="removeMethod"
      >
        <template #quantity>
          <a-quantity-update
            :value="Number(2)"
            input-id="qty_1"
            class="a-quantity-update--inline a-product-list-item__qty"
            @update="changeMethod"
            decrement-aria-label="Decrease the quantity"
            decrement-icon-title="Minus mark"
            increment-aria-label="Increase the quantity"
            increment-icon-title="Plus mark"
          >
            <template #label>
              <a-label
                class="a-product-list-item__qty-label"
                for="qty_1"
              >
                Qty:
              </a-label>
            </template>
          </a-quantity-update>
        </template>
      </a-product-list-item>
    `
  }))
  .add('With slots', () => ({
    components: {
      AProductListItem,
      AQuantityUpdate,
      ALabel
    },
    props: {
      nameKnob: {
        default: text('Product name', 'Ingrid Running Jacket')
      },
      imageUrlKnob: {
        default: text('Product image url', '/images/product/cart-product-160_160.jpg')
      },
      pricesKnob: {
        default: object('Product prices', defaultPrices)
      },
      optionsKnob: {
        default: object('Product options', defaultOptions)
      }
    },
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change')
    },
    template: `
      <a-product-list-item
        id="prod1"
        :name="nameKnob"
        :image-url="imageUrlKnob"
        :prices="pricesKnob"
        url="#"
        :options="optionsKnob"
        @remove="removeMethod"
      >
        <template #image="image">
          <img
            :src="image.productImageUrl"
            :alt="image.productImageAlt + ' image.'"
            style="border: 1px dashed #000; border-radius: 50%;"
          />
        </template>
        <template #name="name">
          <strong style="margin-right: 5px;">Product:</strong>
          <a :href="name.productUrl">{{ name.productName.toUpperCase() }}</a>
        </template>
        <template #prices="prices">
          <div style="margin-top: 10px; flex-basis: 100%;">
            <strong style="color: #a01111;">{{ prices.productPrices.specialPrice }}</strong>
            <small style="text-decoration: line-through;">{{ prices.productPrices.regularPrice }}</small>
          </div>
        </template>
        <template #options="options">
          <ul>
            <li v-for="option in options.productOptions">
              {{ option.label }} {{ option.value }}
            </li>
          </ul>
        </template>
        <template #quantity>
          <a-quantity-update
            :value="Number(2)"
            input-id="qty_1"
            class="a-quantity-update--inline a-product-list-item__qty"
            @update="changeMethod"
            decrement-aria-label="Decrease the quantity"
            decrement-icon-title="Minus mark"
            increment-aria-label="Increase the quantity"
            increment-icon-title="Plus mark"
          >
            <template #label>
              <a-label
                class="a-product-list-item__qty-label"
                for="qty_1"
              >
                Qty:
              </a-label>
            </template>
          </a-quantity-update>
        </template>
        <template #removeAction="removeAction">
          <button @click="() => { removeAction.productRemove(); }">
            Delete!
          </button>
        </template>
      </a-product-list-item>
    `
  }))
