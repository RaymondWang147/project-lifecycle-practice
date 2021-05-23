import React from 'react';
import Button from './button';

export default {
  title: 'form/my-button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args: any) => <Button {...args} />;

export const Success = Template.bind({});
// Success.args = {
//   variant: 'success',
//   children: 'Success',
// };
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Failed = () => <Button variant="failed">Failed</Button>;
