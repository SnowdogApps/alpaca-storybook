import { storiesOf } from '@storybook/vue'

import AIcon from './Icon.vue'
import AIconArrowLeft from './templates/IconArrowLeft.vue'
import AIconArrowRight from './templates/IconArrowRight.vue'
import AIconPerson from './templates/IconPerson.vue'
import AIconCheck from './templates/IconCheck.vue'
import AIconExpandMore from './templates/IconExpandMore.vue'
import AIconExpandLess from './templates/IconExpandLess.vue'
import AIconClose from './templates/IconClose.vue'
import AIconSearch from './templates/IconSearch.vue'
import AIconFavoriteBorder from './templates/IconFavoriteBorder.vue'
import AIconEqualizer from './templates/IconEqualizer.vue'
import AIconYoutube from './templates/IconYoutube.vue'
import AIconDelete from './templates/IconDelete.vue'
import AIconRemove from './templates/IconRemove.vue'
import AIconAdd from './templates/IconAdd.vue'
import AIconStar from './templates/IconStar.vue'
import AIconStarBorder from './templates/IconStarBorder.vue'

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

storiesOf('Atoms/Icon', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: {
      AIcon,
      AIconArrowLeft,
      AIconArrowRight,
      AIconPerson,
      AIconCheck,
      AIconExpandMore,
      AIconExpandLess,
      AIconClose,
      AIconSearch,
      AIconFavoriteBorder,
      AIconEqualizer,
      AIconYoutube,
      AIconDelete,
      AIconRemove,
      AIconAdd,
      AIconStar,
      AIconStarBorder
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
          <a-icon title="Checked icon">
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
          <a-icon title="Favorite icon">
            <a-icon-favorite-border />
          </a-icon>
          <span :style="labelStyles">
            favorite_border
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
          <a-icon title="Remove icon">
            <a-icon-remove />
          </a-icon>
          <span :style="labelStyles">
            remove
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
          <a-icon title="Youtube icon">
            <a-icon-youtube />
          </a-icon>
          <span :style="labelStyles">
            youtube
          </span>
        </div>
      </div>
    `
  }))
