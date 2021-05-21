import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-vue-router'

import ASidebarBlock from './SidebarBlock.vue'

import products from './mocks/products.json'

storiesOf('Modules/Sidebar Block', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Compare', () => ({
    components: { ASidebarBlock },
    data: () => ({
      products
    }),
    methods: {
      clearCompareList: action('Clear compare list'),
      removeFromCompare: action('Remove product from compare')
    },
    template: `
      <a-sidebar-block
        :products="products"
        @clearCompareList="clearCompareList"
        @removeFromCompare="removeFromCompare"
      />
    `
  }))
