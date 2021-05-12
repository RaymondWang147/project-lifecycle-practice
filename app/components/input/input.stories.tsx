import React from 'react';
import Input from './input';

export default {
  title: 'form/my-input',
  component: Input,
};

export const Small = () => <Input variant="small" placeholder="small"></Input>;
export const Medium = () => <Input variant="medium"></Input>;
export const Large = () => <Input variant="large"></Input>;
