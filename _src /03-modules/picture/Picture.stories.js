import { storiesOf } from '@storybook/vue'

import APicture from './Picture.vue'
import images from './mocks/images.json'

storiesOf('Modules/Picture', module)
  // @vue/component
  .add('Default', () => ({
    components: { APicture },
    data: () => ({
      images
    }),
    template: `
      <a-picture
        :images="images"
        alt="example alt text"
      />
    `
  }))
