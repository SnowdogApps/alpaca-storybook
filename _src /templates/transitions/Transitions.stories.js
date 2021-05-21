import { storiesOf } from '@storybook/vue'

import AButton from '../../atoms/button/Button.vue'
import AParagraph from '../../atoms/paragraph/Paragraph.vue'

const data = {
  data: () => ({
    isVisible: true
  }),
  methods: {
    toggleContent () {
      this.isVisible = !this.isVisible
    }
  }
}

storiesOf('Templates/Transitions', module)
  .addParameters({ info: true })
  .add('Fade', () => ({
    ...data,
    components: {
      AButton,
      AParagraph
    },
    template: `
      <div>
        <a-button @click.native="toggleContent()">
          Fade
        </a-button>
        <transition name="fade">
          <a-paragraph v-if="isVisible" style="margin-top: 8px;">
            Fade content
          </a-paragraph>
        </transition>
      </div>
    `
  }))
  .add('Slide up', () => ({
    ...data,
    components: {
      AButton,
      AParagraph
    },
    template: `
      <div>
        <a-button @click.native="toggleContent()">
          Slide Up
        </a-button>
        <transition name="slide-up">
          <a-paragraph v-if="isVisible" style="margin-top: 8px;">
            Slide Up
          </a-paragraph>
        </transition>
      </div>
    `
  }))
  .add('Slide right', () => ({
    ...data,
    components: {
      AButton,
      AParagraph
    },
    template: `
      <div>
        <a-button @click.native="toggleContent()">
          Slide Right
        </a-button>
        <transition name="slide-right">
          <a-paragraph v-if="isVisible" style="margin-top: 8px;">
            Slide right content
          </a-paragraph>
        </transition>
      </div>
    `
  }))
  .add('Slide down', () => ({
    ...data,
    components: {
      AButton,
      AParagraph
    },
    template: `
      <div>
        <a-button @click.native="toggleContent()">
          Slide Down
        </a-button>
        <transition name="slide-down">
          <a-paragraph v-if="isVisible" style="margin-top: 8px;">
            Slide down content
          </a-paragraph>
        </transition>
      </div>
    `
  }))
  .add('Slide left', () => ({
    ...data,
    components: {
      AButton,
      AParagraph
    },
    template: `
      <div>
        <a-button @click.native="toggleContent()">
          Slide Left
        </a-button>
        <transition name="slide-left">
          <a-paragraph v-if="isVisible" style="margin-top: 8px;">
            Slide left content
          </a-paragraph>
        </transition>
      </div>
    `
  }))
