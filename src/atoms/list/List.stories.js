import AList from './List.vue'
import AListItem from '@atoms/list-item/ListItem.vue'
import ALink from '@atoms/link/Link.vue'
import AIcon from '@atoms/icon/Icon.vue'
import AIconPerson from '@atoms/icon/templates/IconPerson.vue'
import AIconCheck from '@atoms/icon/templates/IconCheck.vue'
import AIconPhone from '@atoms/icon/templates/IconPhone.vue'

export default {
  title: 'Atoms/List',
  component: AList,
  argTypes: {
    tag: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'multi-select',
        options: [
          'primary',
          'native',
          'horizontal',
          'divided',
          'centered',
          'divided-horizontal'
        ]
      }
    }
  }
}

// base list
const BaseTemplate = (args, { argTypes }) => ({
  components: { AList, AListItem },
  props: Object.keys(argTypes),
  template: `
    <a-list
      :tag="tag"
      :variant="variant"
    >
      <a-list-item>
        Lorem ipsum
      </a-list-item>
      <a-list-item>
        Lorem ipsum
      </a-list-item>
      <a-list-item>
        Lorem ipsum
      </a-list-item>
    </a-list>
  `
})

export const Default = BaseTemplate.bind({})

// with links list
const WithLinksTemplate = (args, { argTypes }) => ({
  components: { AList, AListItem, ALink },
  props: Object.keys(argTypes),
  template: `
    <a-list
      :tag="tag"
      :variant="variant"
    >
      <a-list-item>
        <a-link href="#">Lorem ipsum</a-link>
      </a-list-item>
      <a-list-item>
        <a-link href="#">Lorem ipsum</a-link>
      </a-list-item>
      <a-list-item>
        <a-link href="#">Lorem ipsum</a-link>
      </a-list-item>
    </a-list>
  `
})

export const WithLinks = WithLinksTemplate.bind({})

// with icons list
const WithIconsTemplate = (args, { argTypes }) => ({
  components: { AList, AListItem, AIcon, AIconPerson, AIconCheck, AIconPhone },
  props: Object.keys(argTypes),
  template: `
    <a-list
      :tag="tag"
      :variant="variant"
    >
      <a-list-item>
        <a-icon title="Account icon">
          <a-icon-person />
        </a-icon>
      </a-list-item>
      <a-list-item>
        <a-icon title="Check icon">
          <a-icon-check />
        </a-icon>
      </a-list-item>
      <a-list-item>
        <a-icon title="Phone icon">
          <a-icon-phone />
        </a-icon>
      </a-list-item>
    </a-list>
  `
})

export const WithIcons = WithIconsTemplate.bind({})

// description list
// const DescriptionTemplate = (args, { argTypes }) => ({
//   components: { AList, AListItem },
//   props: Object.keys(argTypes),
//   template: `
//     <a-list tag="dl">
//       <a-list-item tag="dt">
//         Lorem ipsum
//       </a-list-item>
//       <a-list-item tag="dd">
//         Lorem ipsum value
//       </a-list-item>
//       <a-list-item tag="dt">
//         Lorem ipsum
//       </a-list-item>
//       <a-list-item tag="dd">
//         Lorem ipsum value
//       </a-list-item>
//     </a-list>
//   `
// })

// export const Description = DescriptionTemplate.bind({})
