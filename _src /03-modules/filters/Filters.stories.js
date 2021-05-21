import { storiesOf } from '@storybook/vue'

import AFilters from './Filters.vue'

import swatchItems from '../../03-modules/filter/mocks/swatchItems'
import colorItems from '../../03-modules/filter/mocks/colorItems'
import checkboxItems from '../../03-modules/filter/mocks/checkboxItems'
import activeFilterItems from '../../03-modules/active-filters/mocks/active-filters.json'

storiesOf('Modules/Filters', module)
  // @vue/component
  .add('Default', () => ({
    components: { AFilters },
    data: () => ({
      swatchItems,
      colorItems,
      activeFilterItems,
      checkboxItems
    }),
    template: `
      <a-filters
        active-filters-heading="Now Shopping by"
        all-filters-heading="Shopping Options"
        :active-filter-items="activeFilterItems"
        :swatch-items="swatchItems"
        :color-items="colorItems"
        :checkbox-items="checkboxItems"
      />
    `
  }))
