import React from 'react';

import Title from './Title';
import { TITLE_LEVELS } from 'src/data/constants';

export default {
  title: 'Example/Title',
  component: Title

};

const Template = (args) => <Title {...args} />;

export const Level1 = Template.bind({});

Level1.args = {
  level: TITLE_LEVELS.LEVEL1,
  children: 'test 1'
};

export const Level2 = Template.bind({});

Level2.args = {
  level: TITLE_LEVELS.LEVEL2,
  children: 'test 2'
};
