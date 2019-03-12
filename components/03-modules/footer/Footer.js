import AlpacaIcon from '@/components/01-globals/icon/Icon.vue'
import AlpacaLink from '@/components/01-globals/link/Link.vue'
import AlpacaButton from '@/components/02-elements/button/Button.vue'
import AlpacaList from '@/components/02-elements/list/List.vue'
import AlpacaListItem from '@/components/02-elements/list/ListItem.vue'
import AlpacaCookieMessage from '@/components/02-elements/cookie-message/CookieMessage.vue'
import AlpacaDropdownList from '@/components/02-elements/dropdown-list/DropdownList.vue'
import AlpacaDropdownListItem from '@/components/02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue'
import AlpacaNewsletter from '@/components/03-modules/newsletter/Newsletter.vue'

export default {
  components: {
    AlpacaButton,
    AlpacaLink,
    AlpacaIcon,
    AlpacaList,
    AlpacaListItem,
    AlpacaCookieMessage,
    AlpacaDropdownList,
    AlpacaDropdownListItem,
    AlpacaNewsletter
  },
  props: {
    copyrightText: {
      type: String,
      required: true
    },
    socialListSubtitle: {
      type: String,
      required: true
    },
    socialMenu: {
      type: Array,
      required: true
    },
    menu: {
      type: Array,
      required: true
    },
    cookieText: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    input: {
      type: Object,
      required: true
    },
    checkboxes: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    submitNewsletter(payload) {
      this.$emit('submitNewsletter', payload)
    }
  }
}
