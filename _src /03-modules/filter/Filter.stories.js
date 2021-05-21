import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ADropdownList from '../../molecules/collapse/Collapse.vue'
import ACheckboxFilter from '../checkbox-filter/CheckboxFilter.vue'
import AColorFilter from '../color-filter/ColorFilter.vue'
import ASwatchFilter from '../swatch-filter/SwatchFilter.vue'

import swatchItems from './mocks/swatchItems'
import colorItems from './mocks/colorItems'
import checkboxItems from './mocks/checkboxItems'

storiesOf('Modules/Filter', module)
  // @vue/component
  .add('Swatch', () => ({
    components: { ASwatchFilter, ADropdownList },
    data: () => ({
      swatchItems
    }),
    methods: {
      click: action('Clicked')
    },
    template: `
      <a-dropdown-list secondary>
        <a-swatch-filter
          title="Swatch"
          id="swatchId"
          :items="swatchItems"
          @click="click"
        />
      </a-dropdown-list>
    `
  }))
  // @vue/component
  .add('Color', () => ({
    components: { ADropdownList, AColorFilter },
    data: () => ({
      colorItems
    }),
    methods: {
      click: action('Clicked')
    },
    template: `
      <a-dropdown-list secondary>
        <a-color-filter
          title="Color"
          id="colorId"
          :items="colorItems"
          @click="click"
        />
      </a-dropdown-list>
    `
  }))
  // @vue/component
  .add('Checkbox', () => ({
    components: { ADropdownList, ACheckboxFilter },
    data: () => ({
      checkboxItems
    }),
    template: `
      <a-dropdown-list secondary>
        <a-checkbox-filter
          title="Checkbox"
          id="checkboxId"
          :items="checkboxItems"
        />
      </a-dropdown-list>
    `
  }))
