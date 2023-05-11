import MyHeader from '../app/elements/my-header.mjs';
import enhance from '@enhance/ssr'
const html = enhance({
  elements: {
    'my-header': MyHeader
  }
})
import './generated.css'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Example/MyHeader',
  tags: ['autodocs'],
  render: (args) => MyHeader(args),
  argTypes: {
    state: {
      options: ['Bold', 'Quiet'],
      mapping: {
        Bold: {
          attrs: {
            variant: 'bold'
          }
        },
        Quiet: {
          attrs: {
            variant: 'quiet'
          }
        },
      },
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Bold = {
  args: {
    html,
    state: {
      attrs: {
        variant: 'bold'
      }
    }
  },
};

export const Quiet = {
  args: {
    html,
    state: {
      attrs: {
        variant: 'quiet'
      }
    }
  },
};
