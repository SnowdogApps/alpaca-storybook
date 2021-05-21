import { storiesOf } from '@storybook/vue'
import { number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import APagination from './Pagination.vue'

storiesOf('Molecules/Pagination', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { APagination },
    props: {
      currentPageKnob: {
        default: number('Current page', 10)
      },
      totalSizeKnobs: {
        default: number('All pages', 20)
      }
    },
    methods: {
      select: action('Selected')
    },
    template: `
      <a-pagination
        @update="select"
        :current-page="currentPageKnob"
        :number-of-pages="totalSizeKnobs"
      />
    `
  }))
