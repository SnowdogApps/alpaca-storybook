import getClass from '../../../utils/helpers/get-class.js'

export default {
  mixins: [getClass],
  props: {
    /**
     * Array with breadcrumbs
     */
    breadcrumbs: {
      type: Array,
      required: true
    },
    /**
     * Describes the type of navigation provided in the nav element
     */
    breadcrumbsNavAriaLabel: {
      type: String,
      default: 'Breadcrumb'
    }
  },
  data () {
    return {
      config: {
        base: {
          breadcrumbs: [
            'hidden', 'lg:block',
            'min-h-24'
          ],
          breadcrumbs__list: [
            'flex', 'flex-wrap'
          ],
          'breadcrumbs__list-item': [
            'flex', 'items-stretch',
            'text-sm', 'leading-6'
          ],
          breadcrumbs__link: [
            'flex', 'items-center',
            'text-gray-600', 'hover:text-gray-800'
          ],
          'breadcrumbs__link--current': [
            'flex', 'items-center',
            'text-gray-800'
          ],
          breadcrumbs__separator: [
            'mx-2'
          ]
        }
      }
    }
  }
}
