import { storiesOf } from '@storybook/vue'

import ABriefInfo from './BriefInfo.vue'

import briefInfo from './mocks/brief-info.json'

storiesOf('Modules/Brief Info', module)
  // @vue/component
  .add('Default', () => ({
    components: { ABriefInfo },
    data: () => ({
      briefInfo
    }),
    template: `
      <a-brief-info
        :items="briefInfo.items"
        :level="3"
        :heading="briefInfo.heading.text"
      />
    `
  }))
