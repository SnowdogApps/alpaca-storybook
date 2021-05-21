import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AActiveFilters from './ActiveFilters.vue'

import filters from './mocks/active-filters.json'

storiesOf('Modules/ActiveFilters', module)
  // @vue/component
  .add('Default', () => ({
    components: { AActiveFilters },
    data: () => ({
      filters
    }),
    methods: {
      clearAll: action('Clear all items'),
      clearItem: action('Clear single item')
    },
    template: `
      <a-active-filters
        :items="filters"
        clear-button="Clear all"
        @clearAll="clearAll"
        @clearItem="clearItem"
      />
    `
  }))
