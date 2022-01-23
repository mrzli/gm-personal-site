import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Title, TitleProps } from './Title';

export default {
  title: 'Components/Reusable/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: 'Title',
};
