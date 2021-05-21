import ABreadcrumbs from './Breadcrumbs.vue'
import ALink from '@atoms/link/Link.vue'

import breadcrumbs from '@mocks/breadcrumbs.json'

export default {
  title: 'Molecules/Breadcrumbs',
  component: ABreadcrumbs,
  args: {
    breadcrumbs
  },
  argTypes: {
    breadcrumbs: {
      control: 'object'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ABreadcrumbs },
  props: Object.keys(argTypes),
  template: `
    <a-breadcrumbs :breadcrumbs="breadcrumbs"/>
  `
})

export const Default = Template.bind({})

export const WithSlots = (args, { argTypes }) => ({
  components: { ABreadcrumbs, ALink },
  props: Object.keys(argTypes),
  template: `
    <a-breadcrumbs :breadcrumbs="breadcrumbs">
      <template #previous="data">
        <a-link
          :href="data.breadcrumb.href"
          variant="none"
          class="text-blue-500 hover:text-blue-600"
        >
          {{ data.breadcrumb.text }}
        </a-link>
      </template>
      <template #separator>
        <span
          role="presentation"
          class="mx-4 text-blue-500"
        >
          -
        </span>
      </template>
      <template #current="data">
        <span
          aria-current="page"
          class="text-blue-800"
        >
          {{ data.breadcrumb.text }}
        </span>
      </template>
    </a-breadcrumbs>
  `
})
