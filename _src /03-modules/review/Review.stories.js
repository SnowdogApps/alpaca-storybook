import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AReview from './Review.vue'
import AReviewSummary from '../review-summary/ReviewSummary.vue'
import AReviewAdd from '../review-add/ReviewAdd.vue'

import reviews from './mocks/reviews.json'

storiesOf('Modules/Review', module)
  // @vue/component
  .add('Default', () => ({
    components: { AReview },
    data: () => ({
      reviews
    }),
    template: `
      <a-review
        v-for="review in reviews"
        :key="review.id"
        :author="review.author"
        :title="review.title"
        :content="review.content"
        :date="review.date"
      />
  `
  }))
  // @vue/component
  .add('Summary', () => ({
    components: { AReviewSummary },
    template: `
      <a-review-summary
        amountLink="#"
        addReviewLink="#"
        :reviewsQty="32"
      />
  `
  }))
  // @vue/component
  .add('Add', () => ({
    components: { AReviewAdd },
    methods: {
      addReview: action('Added')
    },
    template: `
      <a-review-add
        product-title="Product name"
        heading-text="YOU'RE REVIEWING"
        legend-text=""
        @addReview="addReview"
      />
  `
  }))
