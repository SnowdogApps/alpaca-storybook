import { storiesOf } from '@storybook/vue'

import AButton from '../../atoms/button/Button.vue'
import AFileUpload from './FileUpload.vue'

storiesOf('Molecules/File Upload', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AFileUpload },
    template: `
      <a-file-upload
        title="Your file"
        button-text="Upload a file"
        empty-text="File not choosen"
      />
    `
  }))
  .add('With slots', () => ({
    components: {
      AButton,
      AFileUpload
    },
    template: `
      <a-file-upload accepted-formats=".pdf,.doc">
        <template #file="file">
          <span>
            {{ file.fileName }}
          </span>
        </template>
        <template #title>
          <span class="file-upload__label">
            Your file (pdf, doc)
          </span>
        </template>
        <template #button="button">
          <a-button
            class="custom file-upload__button"
            aria-controls="file"
            @click.native="button.chooseFile"
          >
            Upload new file
          </a-button>
        </template>
        <template #empty>
          File not choosen
        </template>
      </a-file-upload>
    `
  }))
  .add('File size limit', () => ({
    components: { AFileUpload },
    template: `
      <a-file-upload
        accepted-formats=".pdf,.doc"
        button-text="Upload a file"
        empty-text="File not choosen"
        :max-size="1000000"
      >
        <template #title>
          <span class="file-upload__label">
            Your file (pdf, doc, max 1 MB)
          </span>
        </template>
        <template #error>
          <span class="file-upload__error">
            File is too big! Please upload < 1 MB file
          </span>
        </template>
      </a-file-upload>
    `
  }))
