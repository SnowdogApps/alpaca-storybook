import { storiesOf } from '@storybook/vue'
import data from './mocks/data'

import ASlider from './Slider.vue'
import AImage from '../../atoms/image/Image'
import { Slide } from 'vue-carousel'

storiesOf('Modules/Slider', module)
  .add('Default', () => ({
    components: { ASlider, Slide, AImage },
    data: () => {
      return {
        ...data
      }
    },
    template: `
      <a-slider>
        <slide
          class="slider__item"
          :key="index"
          v-for="(slide, index) in slides"
        >
          <div class="lazyload-wrapper">
            <a-image
              :src="slide.thumbnail"
              :alt="slide.alt"
            />
          </div>
        </slide>
      </a-slider>
    `
  }))
