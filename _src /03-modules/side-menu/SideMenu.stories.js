import { storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ASideMenu from './SideMenu.vue'
import menu from '../../../mocks/slide-menu.json'

storiesOf('Modules/Side Menu', module)
  .addDecorator(StoryRouter())
  // @vue/component
  .add('Default', () => ({
    components: { ASideMenu },
    data: () => ({
      menu
    }),
    template: `
      <a-side-menu :menu-items="menu"/>
    `
  }))
