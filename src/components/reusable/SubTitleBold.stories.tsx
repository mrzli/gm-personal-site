import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SubTitleBold, SubTitleBoldProps } from './SubTitleBold';

export default {
  title: 'Components/Reusable/Sub-Title Bold',
  component: SubTitleBold
} as Meta;

const Template: Story<SubTitleBoldProps> = (args) => <SubTitleBold {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'SubTitleBold'
};
