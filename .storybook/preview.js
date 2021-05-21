import { addDecorator, addParameters } from '@storybook/vue'

import 'focus-visible'
import 'svgxuse'

import { withKnobs } from '@storybook/addon-knobs'

// Wrap every story in Alpaca App component
import AApp from '../src/atoms/app/App.vue'

addDecorator(withKnobs)
addDecorator(() => ({
  components: { AApp },
  template: `
    <a-app style="padding: 10px;">
      <story />
    </a-app>
  `
}))

addParameters({
  docs: {
    iframeHeight: '60px'
  }
});
