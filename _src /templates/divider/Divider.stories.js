import { storiesOf } from '@storybook/vue'

import ADivider from './Divider.vue'

storiesOf('Templates/Divider', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ADivider },
    template: '<a-divider/>'
  }))
