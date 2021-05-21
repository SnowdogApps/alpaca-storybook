import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import toolbar from './mocks/toolbar.json'

import AToolbar from './Toolbar.vue'

storiesOf('Modules/Toolbar', module)
  // @vue/component
  .add('Default', () => ({
    components: { AToolbar },
    data: () => {
      return {
        toolbar
      }
    },
    methods: {
      listView: action('Change on list view'),
      gridView: action('Change on gird view'),
      updatePage: action('Change page')
    },
    template: `
      <a-toolbar
        show-mode
        show-sorter
        show-limit
        show-amount
        :sort-by="toolbar.sortBy"
        :limiter="toolbar.limiter"
        :amount="toolbar.amount"
        @listView="listView"
        @gridView="gridView"
        @updatePage="updatePage"
      />
    `
  }))
  // @vue/component
  .add('With pagination', () => ({
    components: { AToolbar },
    data: () => {
      return {
        toolbar
      }
    },
    methods: {
      listView: action('Change on list view'),
      gridView: action('Change on grid view'),
      updatePage: action('Change page')
    },
    template: `
      <a-toolbar
        show-mode
        show-sorter
        show-limit
        show-pager
        show-amount
        :sort-by="toolbar.sortBy"
        :limiter="toolbar.limiter"
        :pager="toolbar.pager"
        :amount="toolbar.amount"
        @listView="listView"
        @gridView="gridView"
        @updatePage="updatePage"
      />
    `
  }))
