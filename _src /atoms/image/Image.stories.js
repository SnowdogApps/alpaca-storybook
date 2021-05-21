import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import AImage from './Image.vue'

storiesOf('Atoms/Image', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AImage },
    props: {
      srcKnob: {
        default: text('Image src', 'images/image/banner-480_480.png')
      }
    },
    template: `
      <a-image
        :src="srcKnob"
        alt="alt image text"
      />
    `
  })
  )
