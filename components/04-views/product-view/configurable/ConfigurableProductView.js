import AlpacaContainer from '@alpaca-storybook/components/01-globals/container/Container.vue'
import AlpacaHeading from '@alpaca-storybook/components/01-globals/heading/Heading.vue'
import AlpacaBreadcrumbs from '@alpaca-storybook/components/02-elements/breadcrumbs/Breadcrumbs.vue'
import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'
import AlpacaPrice from '@alpaca-storybook/components/02-elements/price/Price.vue'
import AlpacaSwatch from '@alpaca-storybook/components/02-elements/swatch/Swatch.vue'
import AlpacaTab from '@alpaca-storybook/components/02-elements/tabs/Tab.vue'
import AlpacaTabsContainer from '@alpaca-storybook/components/02-elements/tabs/TabsContainer.vue'
import AlpacaTabContent from '@alpaca-storybook/components/02-elements/tabs/TabContent.vue'
import AlpacaAdditionalContent from '@alpaca-storybook/components/03-modules/additional-content/AdditionalContent.vue'
import AlpacaCatalogGridItem from '@alpaca-storybook/components/03-modules/catalog-grid-item/CatalogGridItem.vue'
import AlpacaGallery from '@alpaca-storybook/components/03-modules/gallery/Gallery.vue'
import AlpacaBriefInfo from '@alpaca-storybook/components/03-modules/brief-info/BriefInfo.vue'
import AlpacaReviewSummary from '@alpaca-storybook/components/03-modules/review/review-summary/ReviewSummary.vue'
import AlpacaQuantityUpdate from '@alpaca-storybook/components/03-modules/quantity-update/QuantityUpdate.vue'
import AlpacaSlider from '@alpaca-storybook/components/03-modules/slider/Slider.vue'
import { Slide } from 'vue-carousel'

export default {
  components: {
    AlpacaContainer,
    AlpacaHeading,
    AlpacaBreadcrumbs,
    AlpacaButton,
    AlpacaPrice,
    AlpacaSwatch,
    AlpacaTab,
    AlpacaTabsContainer,
    AlpacaTabContent,
    AlpacaAdditionalContent,
    AlpacaCatalogGridItem,
    AlpacaGallery,
    AlpacaBriefInfo,
    AlpacaReviewSummary,
    AlpacaQuantityUpdate,
    AlpacaSlider,
    Slide
  },
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    },
    tabs: {
      type: Array,
      required: true
    },
    briefInfo: {
      type: Object,
      required: true
    },
    gallery: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true
    },
    stockAlertMaxQty: {
      type: Number,
      default: 5
    },
    inStockAlertText: {
      type: String,
      default: 'In stock - only'
    },
    inStockAlertTextSuffix: {
      type: String,
      default: 'left'
    },
    inStockText: {
      type: String,
      default: 'In stock'
    },
    outOfStockText: {
      type: String,
      default: 'Out of stock'
    },
    addToCartText: {
      type: String,
      default: 'Add to cart'
    },
    relatedProductsLabel: {
      type: String,
      default: 'Related products'
    },
    featuredProductsLabel: {
      type: String,
      default: 'You may also like'
    },
    banner: {
      type: Array,
      default: () => []
    },
    bannerAlt: {
      type: String,
      default: ''
    },
    firstColumnText: {
      type: String,
      default: ''
    },
    secondColumnText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeTab: this.tabs[0].tabId
    }
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = this.tabs
        .filter(el => el.tabId === tab)
        .map(el => el.tabId)[0]
    }
  }
}