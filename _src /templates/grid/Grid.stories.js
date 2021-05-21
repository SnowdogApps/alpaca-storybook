import { storiesOf } from '@storybook/vue'

import AGrid from './Grid.vue'

// Preview styles
import './preview/styles.css'

storiesOf('Templates/Grid', module)
  .addParameters({
    info: true
  })
  .add('Default', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        :grids="[
          [
            'col-xs-12 col-sm-3 col-md-2 col-lg-1',
            'col-xs-6 col-sm-6 col-md-8 col-lg-10',
            'col-xs-6 col-sm-3 col-md-2 col-lg-1'
          ],
          [
            'col-xs-12 col-sm-3 col-md-2 col-lg-1',
            'col-xs-12 col-sm-9 col-md-10 col-lg-11'
          ],
          [
            'col-xs-10 col-sm-6 col-md-8 col-lg-10',
            'col-xs-2 col-sm-6 col-md-4 col-lg-2'
          ]
        ]"
      />
    `
  }))
  .add('Fluid', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        :grids="[
          [
            'col-xs-12'
          ],
          [
            'col-xs-1',
            'col-xs-11'
          ],
          [
            'col-xs-2',
            'col-xs-10'
          ],
          [
            'col-xs-3',
            'col-xs-9'
          ],
          [
            'col-xs-4',
            'col-xs-8'
          ],
          [
            'col-xs-5',
            'col-xs-7'
          ],
          [
            'col-xs-6',
            'col-xs-6'
          ]
        ]"
      />
    `
  }))
  .add('Auto width', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        :grids="[
          [
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs'
          ],
          [
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs'
          ]
        ]"
      />
    `
  }))
  .add('Reordering', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        :grids="[
          [
            'col-xs-2',
            'col-xs-2',
            'col-xs-2',
            'col-xs-2',
            'col-xs-2',
            'col-xs-2 first-xs'
          ],
          [
            'col-xs-2',
            'col-xs-2',
            'col-xs-2 last-xs',
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]
        ]"
      />
    `
  }))
  .add('Distribution around', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="around-xs"
        :grids="[
          [
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]
        ]"
      />
    `
  }))
  .add('Distribution between', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="between-xs"
        :grids="[
          [
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]
        ]"
      />
    `
  }))
  .add('Alignment start', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="start-xs"
        :grids="[
          ['col-xs-6']
        ]"
      />
    `
  }))
  .add('Alignment center', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="center-xs"
        :grids="[
          ['col-xs-6']
        ]"
      />
    `
  }))
  .add('Alignment end', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="end-xs"
        :grids="[
          ['col-xs-6']
        ]"
      />
    `
  }))
  .add('Alignment top', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="top-xs"
        :grids="[
          [
            'col-xs col-large',
            'col-xs'
          ]
        ]"
      />
    `
  }))
  .add('Alignment middle', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="middle-xs"
        :grids="[
          [
            'col-xs col-large',
            'col-xs'
          ]
        ]"
      />
    `
  }))
  .add('Alignment bottom', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="bottom-xs"
        :grids="[
          [
            'col-xs col-large',
            'col-xs'
          ]
        ]"
      />
    `
  }))
  .add('Reversing', () => ({
    components: { AGrid },
    template: `
      <a-grid class="grid-preview"
        row-class="reverse"
        :grids="[
          [
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs'
          ]
        ]"
      />
    `
  }))
