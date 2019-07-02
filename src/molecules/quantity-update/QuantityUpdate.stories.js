import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { number, text, select } from '@storybook/addon-knobs'

import generateVueInfoTable from '../../../utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '../../../utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './QuantityUpdate.selectors.json'

import AQuantityUpdate from './QuantityUpdate.vue'

const info = `
  Check **Knobs** tab to edit component properties dynamically.<br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Molecules/Quantity Update', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AQuantityUpdate },
    props: {
      labelKnob: {
        default: text('Label', 'Quantity')
      },
      minQtyKnob: {
        default: number('Min qty', 0)
      },
      maxQtyKnob: {
        default: number('Max qty', 100)
      },
      classKnob: {
        default: select('Input wrapper class', classKnobsConfig)
      }
    },
    data () {
      return {
        qty: 1
      }
    },
    methods: {
      updateVal: action('Quantity')
    },
    template: `
      <a-quantity-update
        v-model="qty"
        :class="classKnob"
        @update="updateVal"
        :label="labelKnob"
        input-id="qty-update"
        :min-qty="minQtyKnob"
        :max-qty="maxQtyKnob"
        decrement-aria-label="Decrease the quantity"
        decrement-icon-title="Minus mark"
        increment-aria-label="Increase the quantity"
        increment-icon-title="Plus mark"
      />
    `
  }))
  .add('With slots', () => ({
    components: { AQuantityUpdate },
    props: {
      labelKnob: {
        default: text('Label', 'Quantity')
      },
      minQtyKnob: {
        default: number('Min qty', 5)
      },
      maxQtyKnob: {
        default: number('Max qty', 20)
      },
      classKnob: {
        default: select('Input wrapper class', classKnobsConfig)
      }
    },
    methods: {
      updateVal: action('Updated')
    },
    data () {
      return {
        qty: 5
      }
    },
    template: `
      <a-quantity-update
        v-model="qty"
        :class="classKnob"
        @update="updateVal"
        :min-qty="minQtyKnob"
        :max-qty="maxQtyKnob"
      >
        <template #label>
          <label
            for="qty-update"
            style="display: block; margin-bottom: 5px; color: blue;"
          >
            {{ labelKnob }}
          </label>
        </template>
        <template #minus="{ updateQty }">
          <button @click="updateQty(-1)">-</button>
        </template>
        <template #input="{ currentValue, inputEvent }">
          <input
            id="qty-update"
            type="number"
            :value="currentValue"
            @input="inputEvent"
            style="border: 0; text-align: center;"
          >
        </template>
        <template #plus="{ updateQty }">
          <button @click="updateQty(1)">+</button>
        </template>
      </a-quantity-update>
    `
  }))
