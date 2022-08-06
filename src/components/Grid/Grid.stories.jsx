import React from 'react';
import { ALIGN } from 'src/data/constants';
import { Grid } from './Grid';
import { Cell } from './Cell/Cell.styles'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    textAlign: {
      control: 'select', options: Object.values(ALIGN)
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Grid {...args} > <Cell>Cell 1</Cell><Cell>Cell 2</Cell><Cell>Cell 3</Cell></Grid>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  textAlign: ALIGN.LEFT,
};


