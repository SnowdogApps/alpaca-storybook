import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import ACollapse from './Collapse.vue'

storiesOf('Molecules/Collapse', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      components: {
        ACollapse
      },
      props: {
        titleTextKnobs: {
          default: text('Title', 'Collapse title text')
        },
        contentTextKnobs: {
          default: text('Content', 'Collapse content text')
        }
      },
      template: `
        <a-collapse
          :title="titleTextKnobs"
          icon-title="Angle down icon"
        >
          <div style="padding: 16px 0;">
            {{ contentTextKnobs }}
          </div>
        </a-collapse>
      `
    })
  )
  .add(
    'With slots',
    () => ({
      components: {
        ACollapse
      },
      template: `
        <a-collapse>
          <template #button="button">
            <button
              :aria-expanded="!button.collapseLocal"
              :aria-controls="button.ariaControls"
              style="
                width: 100%;
                height: 40px;
                z-index: 1;
                position: relative;
                background-color: #31e37d;
                cursor: pointer;
                border-radius: 4px;
              "
              @click="button.toggle"
            >
              Text
            </button>
          </template>
          <div>Content</div>
        </a-collapse>
      `
    })
  )
