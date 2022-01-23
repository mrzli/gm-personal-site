import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SimpleText, SimpleTextProps } from './SimpleText';

export default {
  title: 'Components/Reusable/Simple Text',
  component: SimpleText,
} as Meta;

const Template: Story<SimpleTextProps> = (args) => <SimpleText {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'SimpleText',
};
