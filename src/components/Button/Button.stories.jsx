import React from 'react';

import { Button } from './Button';
import { SIZE } from 'src/data/constants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: 'select', options: Object.values(SIZE)
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button'
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  label: 'Button'
};

export const Large = (args) => <Button {...args} />;
Large.args = {
  size: SIZE.LARGE,
  label: 'Button'
};

export const Small = (args) => <Button {...args} />;
Small.args = {
  size: SIZE.MEDIUM,
  label: 'Button'
};
