import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import bodyRows from './mocks/bodyRows.json'
import headCells from './mocks/headCells.json'
import footCells from './mocks/footCells.json'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Table.selectors.json'

import ATable from './Table.vue'
import ATableRow from '../table-row/TableRow.vue'
import ATableCell from '../table-cell/TableCell.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/Table', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ATable, ATableRow, ATableCell },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    data: () => ({
      bodyRows,
      headCells,
      footCells
    }),
    template: `
      <a-table
        caption="This is a table"
        :class="classKnobs"
      >
        <thead>
          <a-table-row>
            <a-table-cell
              tag="th"
              v-for="headCell in headCells"
              :key="headCell.id"
              scope="col"
            >
              {{ headCell.text }}
            </a-table-cell>
          </a-table-row>
        </thead>
        <tbody>
          <a-table-row
            v-for="(row, i) in bodyRows"
            :key="row.id"
          >
            <a-table-cell
              v-for="bodyCell in row"
              :key="bodyCell.id"
              :data-th="headCells[i].text"
            >
              {{ bodyCell.text }}
            </a-table-cell>
          </a-table-row>
        </tbody>
        <tfoot>
          <a-table-row>
            <a-table-cell
              v-for="footCell in footCells"
              :key="footCell.id"
              colspan="2"
            >
              {{ footCell.text }}
            </a-table-cell>
          </a-table-row>
        </tfoot>
      </a-table>
    `
  }))
