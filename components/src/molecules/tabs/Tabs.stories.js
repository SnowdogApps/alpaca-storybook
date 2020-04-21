import { storiesOf } from '@storybook/vue'

import ATab from './../../atoms/tab/Tab.vue'
import AIcon from './../../atoms/icon/Icon.vue'

import ATabs from './Tabs.vue'

storiesOf('Molecules/Tabs', module)
  .addParameters({ info: true })
  // @vue/component
  .add('Default', () => ({
    components: { ATabs, ATab, AIcon },
    template: `
      <a-tabs>
        <a-tab name="Tab title" selected>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra ut magna ornare lacinia. Cras sodales elit ac pellentesque aliquet. Nulla nec viverra turpis. Mauris eget quam interdum, viverra enim eget, ultricies purus. Suspendisse eleifend, turpis id pretium consectetur, massa nunc suscipit elit, a porta neque neque sed ex. Curabitur nec ante non urna rhoncus semper. Maecenas id pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis sit amet quam id vestibulum. Nunc faucibus quam non venenatis laoreet. Pellentesque eu feugiat tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </a-tab>
        <a-tab name="Tab title II">
          ...
        </a-tab>
        <a-tab name="Tab title III">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra ut magna ornare lacinia. Cras sodales elit ac pellentesque aliquet. Nulla nec viverra turpis. Mauris eget quam interdum, viverra enim eget, ultricies purus. Suspendisse eleifend, turpis id pretium consectetur, massa nunc suscipit elit, a porta neque neque sed ex. Curabitur nec ante non urna rhoncus semper. Maecenas id pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </a-tab>
      </a-tabs>
    `
  }))
  .add('Custom tab button', () => ({
    components: { ATabs, ATab, AIcon },
    template: `
      <a-tabs>
        <template #tab-button="data">
          {{ data.tab.name }} <a-icon icon="angle-down" class="tabs__icon" />
        </template>

        <a-tab name="Tab title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra ut magna ornare lacinia. Cras sodales elit ac pellentesque aliquet. Nulla nec viverra turpis. Mauris eget quam interdum, viverra enim eget, ultricies purus. Suspendisse eleifend, turpis id pretium consectetur, massa nunc suscipit elit, a porta neque neque sed ex. Curabitur nec ante non urna rhoncus semper. Maecenas id pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis sit amet quam id vestibulum. Nunc faucibus quam non venenatis laoreet. Pellentesque eu feugiat tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </a-tab>
        <a-tab name="Tab title II">
          ...
        </a-tab>
        <a-tab name="Tab title III" selected>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra ut magna ornare lacinia. Cras sodales elit ac pellentesque aliquet. Nulla nec viverra turpis. Mauris eget quam interdum, viverra enim eget, ultricies purus. Suspendisse eleifend, turpis id pretium consectetur, massa nunc suscipit elit, a porta neque neque sed ex. Curabitur nec ante non urna rhoncus semper. Maecenas id pulvinar erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </a-tab>
      </a-tabs>
    `
  }))
