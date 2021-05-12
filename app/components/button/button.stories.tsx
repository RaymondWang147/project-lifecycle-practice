import React from 'react';
import Button from './button';

export default {
  title: 'form/my-button',
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Failed = () => <Button variant="failed">Failed</Button>;
