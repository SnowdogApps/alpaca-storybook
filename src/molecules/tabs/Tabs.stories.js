import ATabs from './Tabs.vue'
import ATab from '@atoms/tab/Tab.vue'
import AButton from '@atoms/button/Button.vue'
import AParagraph from '@atoms/paragraph/Paragraph.vue'
import AIcon from '@atoms/icon/Icon.vue'
import AIconStarBorder from '@atoms/icon/templates/IconStarBorder.vue'

import tabs from '@mocks/tabs.json'

export default {
  title: 'Molecules/Tabs',
  component: ATabs,
  argTypes: {
    tabClick: {
      action: 'clicked tab'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: {
    ATabs,
    ATab,
    AButton,
    AParagraph
  },
  props: Object.keys(argTypes),
  data () {
    return {
      tabs
    }
  },
  template: `
    <a-tabs @click="tabClick">
      <template v-for="(tab, index) in tabs">
        <a-tab
          :name="tab.name"
          :selected="tab.selected"
        >
          <a-paragraph>
            {{ tab.paragraph }}
          </a-paragraph>
        </a-tab>
      </template>
    </a-tabs>
  `
})

export const Default = Template.bind({})

export const WithSlots = (args, { argTypes }) => ({
  components: {
    ATabs,
    ATab,
    AButton,
    AParagraph,
    AIcon,
    AIconStarBorder
  },
  props: Object.keys(argTypes),
  data () {
    return {
      tabs
    }
  },
  template: `
    <a-tabs @click="tabClick">
      <template #button="{ tab }">
        <a-icon
          title="Star border icon"
          class="mr-2"
        >
          <a-icon-star-border />
        </a-icon>
        {{ tab.name }}
      </template>
      <template v-for="(tab, index) in tabs">
        <a-tab
          :name="tab.name"
          :selected="tab.selected"
        >
          <a-paragraph>
            {{ tab.paragraph }}
          </a-paragraph>
          <a-button v-if="tab.button">
            {{ tab.button}}
          </a-button>
        </a-tab>
      </template>
    </a-tabs>
  `
})
