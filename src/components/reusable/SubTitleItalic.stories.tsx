import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SubTitleItalic, SubTitleItalicProps } from './SubTitleItalic';

export default {
  title: 'Components/Reusable/SubTitleItalic',
  component: SubTitleItalic
} as Meta;

const Template: Story<SubTitleItalicProps> = (args) => (
  <SubTitleItalic {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  children: 'SubTitleItalic'
};
