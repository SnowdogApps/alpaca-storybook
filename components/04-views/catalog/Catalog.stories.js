import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import data from './mocks/catalog.json'
import menu from '@alpaca-storybook/components/03-modules/header/mocks/menu.json'
import toolbar from '@alpaca-storybook/components/03-modules/toolbar/mocks/toolbar.json'
import breadcrumbs from "@alpaca-storybook/components/02-elements/breadcrumbs/mocks/breadcrumbs"
import swatchItems from "@alpaca-storybook/components/03-modules/filter/mocks/swatchItems"
import colorItems from "@alpaca-storybook/components/03-modules/filter/mocks/colorItems"
import activeFilterItems from "@alpaca-storybook/components/03-modules/active-filters/mocks/active-filters"
import checkboxItems from "@alpaca-storybook/components/03-modules/filter/mocks/checkboxItems"

import AlpacaHeader from '@alpaca-storybook/components/03-modules/header/Header.vue'
import AlpacaCatalog from './Catalog.vue'

storiesOf('Views/Catalog', module)
  .addDecorator(StoryRouter())
  .add('Default', () => ({
  components: { AlpacaHeader, AlpacaCatalog },
  data() {
    return {
      ...data,
      menu,
      swatchItems,
      colorItems,
      activeFilterItems,
      checkboxItems,
      toolbar,
      breadcrumbs
    }
  },
  template: `
      <alpaca-header
        :menu="menu"
        src="./../images/logo/alpaca.svg"
        link="#"
      />
      <alpaca-catalog
        :products="products.items"
        :swatchItems="swatchItems"
        :colorItems="colorItems"
        :activeFilterItems="activeFilterItems"
        :checkboxItems="checkboxItems"
        :toolbar="toolbar"
        :breadcrumbs="breadcrumbs"
      />
  `
}))
