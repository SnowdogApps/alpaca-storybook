import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { action } from '@storybook/addon-actions'

import ALabel from '../../atoms/label/Label.vue'
import AHeader from './Header.vue'
import ALogin from '../../03-modules/login/Login.vue'
import AMiniCart from '../../03-modules/mini-cart/MiniCart.vue'
import AWishlist from '../../03-modules/wishlist/Wishlist.vue'
import AQuantityUpdate from '../../molecules/quantity-update/QuantityUpdate.vue'
import AModal from '../../molecules/modal/Modal.vue'

import menu from './mocks/menu'
import sideMenu from '../../../mocks/slide-menu'
import products from '../../../mocks/products'
import totals from '../../../mocks/totals'

// todo: add product item component to story

storiesOf('Modules/Header', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
    components: {
      ALabel,
      AHeader,
      ALogin,
      AMiniCart,
      AWishlist,
      AQuantityUpdate,
      AModal
    },
    data: () => ({
      menu,
      sideMenu,
      products,
      totals,
      quantity: {
        text: 'Qty:',
        label: ''
      },
      isModalVisible: false,
      isMinicartVisible: false,
      isWishlistVisible: false
    }),
    methods: {
      login: action('Login'),
      removeMethod: action('Remove'),
      changeMethod: action('Change'),
      goToRegister: action('Go to Register')
    },
    template: `
      <div>
        <a-header
          :menu="menu"
          :side-menu="sideMenu"
          src="../../images/logo/alpaca.svg"
          link="#"
          @toggleMicrocart="isMinicartVisible = true"
          @toggleWishlist="isWishlistVisible = true"
          @goToAccount="isModalVisible = true"
        />
        <a-modal
          :visible="isModalVisible"
          heading="Registred Customers"
          @close="isModalVisible = false"
        >
          <a-login
            legend="Login form"
            forget-password-text="Forgot your password?"
            forget-password-link="#"
            submit-button="Sign In"
            go-to-forgot-password-button=""
            go-to-register-button="or register an account"
            @login="login"
            @goToRegister="goToRegister"
          />
        </a-modal>
        <a-modal
          :visible="isMinicartVisible"
          heading="Shipping Cart"
          modal-content-transition="slide-left"
          class="a-modal--full-height a-modal--right"
          @close="isMinicartVisible = false"
        >
          <a-mini-cart
            :products="products"
            :totals="totals"
            :quantity="quantity"
            summary-title="Shopping summary"
            remove-button="Remove button"
            go-to-checkout-button="Go to Checkout"
            return-to-shopping-button="Return to shopping"
          >
            <template #products>
              <!-- todo: add ProductListItem here -->
            </template>
           </a-mini-cart>
         </a-modal>
        <a-modal
          :visible="isWishlistVisible"
          heading="Wishlist"
          modal-content-transition="slide-left"
          class="a-modal--full-height a-modal--right"
          @close="isWishlistVisible = false"
        >
          <a-wishlist>
            <!-- todo: add ProductListItem here -->
          </a-wishlist>
         </a-modal>
      </div>
    `
  }))
