import MyHeader from '../app/elements/my-header.mjs';
import enhance from '@enhance/ssr'
const html = enhance({
  elements: {
    'my-header': MyHeader
  }
})
import { enhanceArgs } from './helpers/enhance.js'
import '../.enhance/generated.css'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Example/MyHeader',
  tags: ['autodocs'],
  render: (args) => MyHeader(enhanceArgs(html, args)),
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['bold', 'quiet'],
    },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Bold = {
  args: {
    variant: 'bold'
  },
}

export const Quiet = {
  args: {
    variant: 'quiet'
  },
}
