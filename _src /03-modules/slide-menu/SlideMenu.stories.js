import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ASlideMenu from './SlideMenu.vue'
import menu from '../../../mocks/slide-menu.json'

storiesOf('Modules/Slide Menu', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Default', () => ({
    components: { ASlideMenu },
    data: () => ({
      menu
    }),
    template: `
      <a-slide-menu :menu-items="menu"/>
    `
  }))
