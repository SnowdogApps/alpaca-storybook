import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { number, color, text } from '@storybook/addon-knobs'

import ARating from './Rating.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconClose from '../../atoms/icon/templates/IconClose.vue'
import AIconCheck from '../../atoms/icon/templates/IconCheck.vue'

storiesOf('Molecules/Rating', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ARating },
    methods: {
      select: action('Selected')
    },
    props: {
      activeColorKnob: {
        default: color('Active color', '#fab216')
      },
      inactiveColorKnob: {
        default: color('Inactive color', '#c9c9c9')
      },
      numberOfRatingKnob: {
        default: number('Number of rating', 5)
      }
    },
    template: `
      <a-rating
        :items="numberOfRatingKnob"
        :active-color="activeColorKnob"
        :inactive-color="inactiveColorKnob"
        @select="select"
      />
    `
  }))
  .add('Read only', () => ({
    components: { ARating },
    props: {
      inactiveColorKnob: {
        default: color('Inactive color', '#c9c9c9')
      },
      activeColorKnob: {
        default: color('Active icon', '#d42343')
      },
      averageKnob: {
        default: number('Average', 3.4)
      },
      numberOfRatingKnob: {
        default: number('Number of rating', 6)
      }
    },
    template: `
      <a-rating
        :items="numberOfRatingKnob"
        :inactive-color="inactiveColorKnob"
        :active-color="activeColorKnob"
        :average="averageKnob"
      />
    `
  }))
  .add('With custom icons', () => ({
    components: {
      ARating,
      AIcon,
      AIconClose,
      AIconCheck
    },
    methods: {
      select: action('Selected')
    },
    props: {
      activeColorKnob: {
        default: color('Active color', '#39FD56')
      },
      inactiveColorKnob: {
        default: color('Inactive color', '#E02020')
      },
      numberOfRatingKnob: {
        default: number('Number of rating', 5)
      },
      iconTitleKnob: {
        default: text('Icon title', 'Rating icon')
      }
    },
    template: `
      <a-rating
        :items="numberOfRatingKnob"
        :active-color="activeColorKnob"
        :inactive-color="inactiveColorKnob"
        @select="select"
      >
        <template #customIcon>
          <a-icon :title="iconTitleKnob">
            <a-icon-check />
          </a-icon>
        </template>
        <template #customUncheckedIcon>
          <a-icon :title="iconTitleKnob">
            <a-icon-close />
          </a-icon>
        </template>
      </a-rating>
    `
  }))
  .add('With slot', () => ({
    components: { ARating },
    props: {
      numberOfRatingKnob: {
        default: number('Number of rating', 3)
      }
    },
    methods: {
      click: action('Clicked')
    },
    template: `
      <a-rating :items="numberOfRatingKnob">
        <template #item="data">
          <svg
            @click="click(data.item)"
            class="icon"
            role="img"
            :style="[(data.item.isActive || data.item.selected) && {fill: 'red'}, {width: '24px', height: '24px'}]"
          >
            <g>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </g>
          </svg>
        </template>
      </a-rating>
    `
  }))
