import { storiesOf } from '@storybook/vue'

import AAdditionalContent from './AdditionalContent.vue'

import picture from './mocks/picture.json'

storiesOf('Modules/Additional Content', module)
  // @vue/component
  .add('Default', () => ({
    components: { AAdditionalContent },
    data () {
      return {
        picture
      }
    },
    template: `
      <a-additional-content
        :picture="picture"
        picture-alt="Sample alt text"
        first-column-text="First column"
        second-column-text="Second column"
      />
    `
  }))
