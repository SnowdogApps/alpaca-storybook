import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import ALabel from '../../atoms/label/Label.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'
import AMiniCart from './MiniCart.vue'

import totals from '../../../mocks/totals'
import products from '../../../mocks/products'

storiesOf('Modules/Mini Cart', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Default', () => ({
    components: { ALabel, AMiniCart, AQuantityUpdate },
    data: () => ({
      totals,
      products
    }),
    methods: {
      removeMethod: action('Remove'),
      changeMethod: action('Change'),
      discountMethod: action('Discount code')
    },
    template: `
      <a-mini-cart
        style="padding: 20px;"
        :totals="totals"
        summary-title="Shopping summary"
        go-to-checkout-button="Go to Checkout"
        return-to-shopping-button="Return to shopping"
        @applyDiscount="discountMethod"
      >
        <template #products>
          <!-- todo: add ProductListItem -->
        </template>
      </a-mini-cart>
    `
  }))
