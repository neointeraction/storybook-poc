import React from 'react';
import { TEXTALIGN } from 'src/data/constants';
import { Grid } from './Grid';
import { Cell } from './Cell/Cell.styles'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Grid',
  component: Grid,
  subComponent:{Cell},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    textAlign: {
      control: 'select', options: Object.values(TEXTALIGN)
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Grid {...args} > <Cell>Cell 1</Cell><Cell>Cell 2</Cell><Cell>Cell 3</Cell></Grid>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  textAlign: TEXTALIGN.CENTER,
};


