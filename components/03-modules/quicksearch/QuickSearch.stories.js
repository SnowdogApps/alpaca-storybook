import { storiesOf } from '@storybook/vue'

import products from './mocks/products.json'
import categories from './mocks/categories.json'
import manufacturers from './mocks/manufacturers.json'

import App from '../../01-globals/app/App.vue'
import AlpacaQuickSearch from './QuickSearch.vue'

storiesOf('Modules/Quick search', module)
  .add('Default', () => ({
    data: () => ({
      products,
      categories,
      manufacturers
    }),
    components: { App, AlpacaQuickSearch },
    template: `
      <app>
        <alpaca-quick-search
          resultText="Results for your request:"
          resultTyped="Ni"
          noResultText="No search results found."
          :products="products"
          :categories="categories"
          :manufacturers="manufacturers"
        />
      </app>
    `
  }))
