import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SubTitle, SubTitleProps } from './SubTitle';

export default {
  title: 'Components/Reusable/Sub-Title',
  component: SubTitle
} as Meta;

const Template: Story<SubTitleProps> = (args) => <SubTitle {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'SubTitle'
};
