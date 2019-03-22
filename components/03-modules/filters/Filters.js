import uniqueId from 'lodash.uniqueid'
import AlpacaHeading from '@alpaca-storybook/components/01-globals/heading/Heading.vue'
import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'
import AlpacaDivider from '@alpaca-storybook/components/02-elements/divider/Divider.vue'
import AlpacaDropdownList from '@alpaca-storybook/components/02-elements/dropdown-list/DropdownList.vue'
import AlpacaDropdownListItem from '@alpaca-storybook/components/02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue'
import AlpacaActiveFilters from '@alpaca-storybook/components/03-modules/active-filters/ActiveFilters.vue'
import AlpacaSwatchFilter from '@alpaca-storybook/components/03-modules/filter/swatch-filter/SwatchFilter.vue'
import AlpacaCheckboxFilter from '@alpaca-storybook/components/03-modules/filter/checkbox-filter/CheckboxFilter.vue'
import AlpacaColorFilter from '@alpaca-storybook/components/03-modules/filter/color-filter/ColorFilter.vue'
import NoSSR from "vue-no-ssr"

const AlpacaRange = () => import('@alpaca-storybook/components/03-modules/range/Range.vue')

export default {
  components: {
    AlpacaHeading,
    AlpacaIcon,
    AlpacaDivider,
    AlpacaDropdownList,
    AlpacaDropdownListItem,
    AlpacaRange,
    AlpacaActiveFilters,
    AlpacaColorFilter,
    AlpacaSwatchFilter,
    AlpacaCheckboxFilter,
    'no-ssr': NoSSR
  },
  props: {
    activeFiltersHeading: {
      type: String,
      required: true
    },
    allFiltersHeading: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    val: {
      type: Array,
      required: true
    },
    colorTitle: {
      type: String,
      default: null
    },
    swatchTitle: {
      type: String,
      default: null
    },
    hasActiveFilters: {
      type: Boolean,
      default: false
    },
    activeFilterItems: {
      type: Array,
      default: null
    },
    swatchItems: {
      type: Array,
      default: null
    },
    colorItems: {
      type: Array,
      default: null
    },
    checkboxItems: {
      type: [Object, Array],
      default: null
    }
  },
  data() {
    return {
      isVisible: true
    }
  },
  computed: {
    getCheckboxArrayWithId() {
      return this.checkboxItems.map(checkboxArray => ({ key: uniqueId("checkboxArray"), checkboxArray }))
    }
  },
  methods: {
    showFilters() {
      this.isVisible = !this.isVisible
    },
    selectOptions(val) {
      this.$emit('selectOptions', val)
    },
    checkSwatch(val) {
      this.$emit('checkSwatch', { id: val.id, label: val.label })
    },
    checkColor(val) {
      this.$emit('checkColor', { id: val.id, label: val.label })
    },
    updateVal(val) {
      this.$emit('updateVal', val)
    },
    clearItem(val) {
      this.$emit('clearItem', val)
    },
    clearAll() {
      this.$emit('clearAll')
    },
  }
}

