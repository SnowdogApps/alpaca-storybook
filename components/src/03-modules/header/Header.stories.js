import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import AlpacaHeader from './Header.vue'
import AlpacaModal from '../../03-modules/modal/Modal.vue'
import AlpacaLogin from '../../03-modules/login/Login.vue'
import AlpacaMiniCart from '../../03-modules/mini-cart/MiniCart.vue'
import AlpacaWishlist from '../../03-modules/wishlist/Wishlist.vue'
import AlpacaQuantityUpdate from '../../03-modules/quantity-update/QuantityUpdate.vue'
import AlpacaProductItem from '../../03-modules/product-item/ProductItem.vue'
import AlpacaOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

import menu from './mocks/menu'
import products from '../../../mocks/products'
import totals from '../../../mocks/totals'

storiesOf('Modules/Header', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: {
      AlpacaHeader,
      AlpacaModal,
      AlpacaLogin,
      AlpacaOffCanvasSidebar,
      AlpacaMiniCart,
      AlpacaWishlist,
      AlpacaQuantityUpdate,
      AlpacaProductItem
    },
    data: () => ({
      menu,
      products,
      totals,
      quantity: {
        text: 'Qty:',
        label: ''
      }
    }),
    template: `
      <div>
        <alpaca-header
          :menu="menu"
          src="../../images/logo/alpaca.svg"
          link="#"
          @toggleMicrocart="showMiniCart"
          @toggleWishlist="toggleWishlist"
          @goToAccount="showRegister"
        />
        <alpaca-modal
          name="register"
          ref="modalRegister"
          heading="Registred Customers"
        >
          <alpaca-login
            legend="Login form"
            forget-password-text="Forgot your password?"
            forget-password-link="#"
            submit-button="Sign In"
            go-to-forgot-password-button=""
            go-to-register-button="or register an account"
            @login="login"
            @goToRegister="goToRegister"
          />
        </alpaca-modal>
        <alpaca-off-canvas-sidebar
          name="mini-cart"
          ref="modalMiniCart"
          heading="Shipping Cart"
        >
          <alpaca-mini-cart
            :products="products"
            :totals="totals"
            :quantity="quantity"
            summary-title="Shopping summary"
            remove-button="Remove button"
            go-to-checkout-button="Go to Checkout"
            return-to-shopping-button="Return to shopping"
          >
            <template #products>
              <alpaca-product-item
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :name="product.name"
                :url="product.url"
                :image="product.image"
                :price="product.price"
                :special-price="product.specialPrice"
                :old-price="product.oldPrice"
                :options="product.options"
                remove-button="Remove button"
                item-tag="li"
                class="minicart__product-item"
                @remove="removeMethod(product.id)"
              >
                <template #quantity>
                  <alpaca-quantity-update
                    :value="3"
                    :input-id="'qty' + product.id"
                    input-aria-label="Change the quantity"
                    decrement-aria-label="Decrease the quantity"
                    decrement-icon-title="Minus mark"
                    increment-aria-label="Increase the quantity"
                    increment-icon-title="Plus mark"
                    class="product-item__qty"
                    label="Qty:"
                    label-class="product-item__qty-label"
                    @update="changeMethod"
                  />
                </template>
              </alpaca-product-item>
            </template>
          </alpaca-mini-cart>
        </alpaca-off-canvas-sidebar>
        <alpaca-off-canvas-sidebar
          name="wishlist"
          ref="modalWishlist"
          heading="Wishlist"
        >
          <alpaca-wishlist :products="products" />
        </alpaca-off-canvas-sidebar>
      </div>
    `,
    methods: {
      showRegister() {
        this.$refs.modalRegister.show('register')
      },
      showMiniCart() {
        this.$refs.modalMiniCart.show('mini-cart')
      },
      toggleWishlist() {
        this.$refs.modalWishlist.show('wishlist')
      },
      login: action('Login'),
      removeMethod: action('Remove'),
      changeMethod: action('Change'),
      goToRegister: action('Go to Register')
    }
  }))