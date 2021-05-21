import AIcon from './Icon.vue'
import AIconArrowLeft from './templates/IconArrowLeft.vue'
import AIconArrowRight from './templates/IconArrowRight.vue'
import AIconPerson from './templates/IconPerson.vue'
import AIconCheck from './templates/IconCheck.vue'
import AIconExpandMore from './templates/IconExpandMore.vue'
import AIconExpandLess from './templates/IconExpandLess.vue'
import AIconAngleLeft from './templates/IconAngleLeft.vue'
import AIconAngleRight from './templates/IconAngleRight.vue'
import AIconClose from './templates/IconClose.vue'
import AIconSearch from './templates/IconSearch.vue'
import AIconFavorite from './templates/IconFavorite.vue'
import AIconFavoriteBorder from './templates/IconFavoriteBorder.vue'
import AIconCompare from './templates/IconCompare.vue'
import AIconEqualizer from './templates/IconEqualizer.vue'
import AIconYoutube from './templates/IconYoutube.vue'
import AIconDelete from './templates/IconDelete.vue'
import AIconRemove from './templates/IconRemove.vue'
import AIconAdd from './templates/IconAdd.vue'
import AIconStar from './templates/IconStar.vue'
import AIconStarBorder from './templates/IconStarBorder.vue'
import AIconShoppingCart from './templates/IconShoppingCart.vue'
import AIconGrid from './templates/IconGrid.vue'
import AIconList from './templates/IconList.vue'
import AIconEdit from './templates/IconEdit.vue'
import AIconShare from './templates/IconShare.vue'
import AIconPhone from './templates/IconPhone.vue'
import AIconEnvelope from './templates/IconEnvelope.vue'
import AIconMobileMenu from './templates/IconMobileMenu.vue'
import AIconVisibility from './templates/IconVisibility.vue'
import AIconVisibilityOff from './templates/IconVisibilityOff.vue'
import AIconUnchecked from './templates/IconUnchecked.vue'
import AIconChecked from './templates/IconChecked.vue'
import AIconFacebook from './templates/IconFacebook.vue'
import AIconTwitter from './templates/IconTwitter.vue'
import AIconThumbUp from './templates/IconThumbUp.vue'
import AIconThumbDown from './templates/IconThumbDown.vue'
import AIconMore from './templates/IconMore.vue'
import AIconAttention from './templates/IconAttention.vue'
import AIconOk from './templates/IconOk.vue'
import AIconError from './templates/IconError.vue'

const wrapperStyles = {
  margin: '20px',
  width: '100px',
  display: 'flex',
  'flex-direction': 'column',
  'align-items': 'center'
}

const labelStyles = {
  display: 'block',
  'margin-top': '20px',
  'text-align': 'center'
}

export default {
  title: 'Atoms/Icon',
  component: AIcon
}

export const Default = () => ({
  components: {
    AIcon,
    AIconArrowLeft,
    AIconArrowRight,
    AIconPerson,
    AIconCheck,
    AIconExpandMore,
    AIconExpandLess,
    AIconAngleLeft,
    AIconAngleRight,
    AIconClose,
    AIconSearch,
    AIconFavorite,
    AIconFavoriteBorder,
    AIconCompare,
    AIconEqualizer,
    AIconYoutube,
    AIconDelete,
    AIconRemove,
    AIconAdd,
    AIconStar,
    AIconStarBorder,
    AIconShoppingCart,
    AIconGrid,
    AIconList,
    AIconEdit,
    AIconShare,
    AIconPhone,
    AIconEnvelope,
    AIconMobileMenu,
    AIconVisibility,
    AIconVisibilityOff,
    AIconUnchecked,
    AIconChecked,
    AIconFacebook,
    AIconTwitter,
    AIconThumbUp,
    AIconThumbDown,
    AIconMore,
    AIconAttention,
    AIconOk,
    AIconError
  },
  data: () => ({
    wrapperStyles,
    labelStyles
  }),
  template: `
    <div style="display: flex; flex-wrap: wrap; padding: 10px;">
      <div :style="wrapperStyles">
        <a-icon title="Arrow Left icon">
          <a-icon-arrow-left />
        </a-icon>
        <span :style="labelStyles">
          arrow_left
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Arrow Right icon">
          <a-icon-arrow-right />
        </a-icon>
        <span :style="labelStyles">
          arrow_right
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Add icon">
          <a-icon-add />
        </a-icon>
        <span :style="labelStyles">
          add
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Remove icon">
          <a-icon-remove />
        </a-icon>
        <span :style="labelStyles">
          remove
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Check icon">
          <a-icon-check />
        </a-icon>
        <span :style="labelStyles">
          check
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Close icon">
          <a-icon-close />
        </a-icon>
        <span :style="labelStyles">
          close
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Delete icon">
          <a-icon-delete />
        </a-icon>
        <span :style="labelStyles">
          delete
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Equalizer icon">
          <a-icon-equalizer />
        </a-icon>
        <span :style="labelStyles">
          equalizer
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Expand more icon">
          <a-icon-expand-more />
        </a-icon>
        <span :style="labelStyles">
          expand_more
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Expand less icon">
          <a-icon-expand-less />
        </a-icon>
        <span :style="labelStyles">
          expand_less
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Angle left">
          <a-icon-angle-left />
        </a-icon>
        <span :style="labelStyles">
          angle_left
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Angle right">
          <a-icon-angle-right />
        </a-icon>
        <span :style="labelStyles">
          angle_right
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Account icon">
          <a-icon-person />
        </a-icon>
        <span :style="labelStyles">
          person
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Search icon">
          <a-icon-search />
        </a-icon>
        <span :style="labelStyles">
          search
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Favorite icon">
          <a-icon-favorite />
        </a-icon>
        <span :style="labelStyles">
          favorite
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Favorite border icon">
          <a-icon-favorite-border />
        </a-icon>
        <span :style="labelStyles">
          favorite_border
        </span>
      </div>
      <div :style="wrapperStyles">
      <a-icon title="Compare icon">
          <a-icon-compare />
        </a-icon>
        <span :style="labelStyles">
          favorite_border
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Star icon">
          <a-icon-star />
        </a-icon>
        <span :style="labelStyles">
          star
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Star border icon">
          <a-icon-star-border />
        </a-icon>
        <span :style="labelStyles">
          star_border
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Grid icon">
          <a-icon-grid />
        </a-icon>
        <span :style="labelStyles">
          grid
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="List icon">
          <a-icon-list />
        </a-icon>
        <span :style="labelStyles">
          list
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Shopping cart icon">
          <a-icon-shopping-cart />
        </a-icon>
        <span :style="labelStyles">
          shooping_cart
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Edit icon">
          <a-icon-edit />
        </a-icon>
        <span :style="labelStyles">
          edit
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Share icon">
          <a-icon-share />
        </a-icon>
        <span :style="labelStyles">
          share
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Phone icon">
          <a-icon-phone />
        </a-icon>
        <span :style="labelStyles">
          phone
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Envelope icon">
          <a-icon-envelope />
        </a-icon>
        <span :style="labelStyles">
          envelope
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Mobile menu icon">
          <a-icon-mobile-menu />
        </a-icon>
        <span :style="labelStyles">
          mobile menu
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Visibility icon">
            <a-icon-visibility />
        </a-icon>
        <span :style="labelStyles">
          visibility
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Visibility off icon">
          <a-icon-visibility-off />
        </a-icon>
        <span :style="labelStyles">
          visibility
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Unchecked icon">
          <a-icon-unchecked />
        </a-icon>
        <span :style="labelStyles">
          unchecked
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Checked icon">
          <a-icon-checked />
        </a-icon>
        <span :style="labelStyles">
          checked
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Youtube icon">
          <a-icon-youtube />
        </a-icon>
        <span :style="labelStyles">
          youtube
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Facebook icon">
          <a-icon-facebook />
        </a-icon>
        <span :style="labelStyles">
          facebook
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Twitter icon">
          <a-icon-twitter />
        </a-icon>
        <span :style="labelStyles">
          twitter
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Thumb up icon">
          <a-icon-thumb-up />
        </a-icon>
        <span :style="labelStyles">
          thumb_up
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Thumb down icon">
          <a-icon-thumb-down />
        </a-icon>
        <span :style="labelStyles">
          thumb_down
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="More icon">
          <a-icon-more />
        </a-icon>
        <span :style="labelStyles">
          more
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Attention icon">
          <a-icon-attention />
        </a-icon>
        <span :style="labelStyles">
          attention
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Ok icon">
          <a-icon-ok />
        </a-icon>
        <span :style="labelStyles">
          ok
        </span>
      </div>
      <div :style="wrapperStyles">
        <a-icon title="Error icon">
          <a-icon-error />
        </a-icon>
        <span :style="labelStyles">
          error
        </span>
      </div>
    </div>
  `
})
