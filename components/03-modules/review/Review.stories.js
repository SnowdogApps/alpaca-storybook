import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaReview from './review/Review.vue'

import reviews from './mocks/reviews.json'

storiesOf('Modules/Review', module)
  .add('Default', () => ({
    components: { App, AlpacaReview },
    data: () => ({
      reviews
    }),
    template: `
    <app>
      <alpaca-review
        v-for="review in reviews"
        :key="review.id"
        :author="review.author"
        :title="review.title"
        :content="review.content"
        :date="review.date"
      />
    </app>
  `
  }))
