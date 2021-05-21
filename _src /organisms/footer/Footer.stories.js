import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { object } from '@storybook/addon-knobs'

import AFooter from './Footer.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconStar from '../../atoms/icon/templates/IconStar.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import ALink from '../../atoms/link/Link.vue'

import menu from '../../../mocks/footer-menu.json'

const checkbox = {
  name: 'agreement',
  value: 'agreement-value',
  id: 'newsletter-agreement',
  label: 'I agree to Terms and conditions and I am happy to receive your newsletter with all your promotions.'
}

const input = {
  placeholder: 'Enter your email address',
  id: 'newsletter-id',
  name: 'newsletter-email',
  label: 'Email'
}

const cookieMessage = {
  visible: true,
  text: 'Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.',
  closeButton: 'Close',
  closeAriaLabel: 'Close cookie message'
}

storiesOf('Organisms/Footer', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: {
      AFooter,
      AList,
      AListItem,
      ALink,
      AIcon,
      AIconStar
    },
    props: {
      menuKnob: {
        default: object('Menu', menu)
      }
    },
    data: () => ({
      menu,
      cookieMessage,
      checkbox,
      input
    }),
    methods: {
      submitNewsletter: action('Submitted'),
      closeCookieMessage () {
        this.cookieMessage.visible = false
      }
    },
    template: `
      <a-footer
        :input="input"
        :checkbox="checkbox"
        :menu="menuKnob"
        :cookie-message="cookieMessage"
        copyright-text="Copyright © 2019 A. All rights reserved."
        scroll-aria-label="Scroll to top"
        heading="Sing up to our twisted newsletter"
        social-list-subtitle="Find us on"
        @closeCookieMessage="closeCookieMessage"
        @submitNewsletter="submitNewsletter"
      >
        <template #socialList>
          <a-list class="a-list--horizontal a-footer__social-list">
            <a-list-item
              class="a-footer__social-list-item"
              aria-label="Go to A Youtube Channel"
            >
              <a-link
                style="display: block;"
                href="#"
              >
                <!-- Add proper icon -->
                <a-icon
                  title="Go to A Youtube Channel"
                  class="a-footer__social-icon"
                  style="fill: #fff;"
                >
                  <a-icon-star />
                </a-icon>
              </a-link>
            </a-list-item>
          </a-list>
        </template>
      </a-footer>
    `
  }))
