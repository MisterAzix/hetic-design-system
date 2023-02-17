import { Story, Meta } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Input, InputProps } from './Input';
import { Eye, EyeSlash } from '../Icons';
import { useForm, Control, Controller } from 'react-hook-form';

export default {
  component: Input,
  title: 'Form/Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  type: 'text',
  label: 'label',
  placeholder: 'placeholder',
};

export const All = () => {
  const { control, setError } = useForm();

  useEffect(() => {
    setError('errors', {
      type: 'required',
      message: 'This input is required!',
    });
  }, [setError]);

  return (
    <>
      <Input type="text" name="default" label="Default" placeholder="Default" />
      <Input type="text" name="autofocus" label="Autofocus" placeholder="Autofocus" autoFocus />
      <Input type="text" name="disabled" label="Disabled" placeholder="Disabled" disabled />
      <Input type="number" name="prefix" label="Prefix" placeholder="Prefix" prefixIcon="$" />
      <Input type="number" name="suffix" label="Suffix" placeholder="Suffix" suffixIcon="€" />
      <Controller
        name={'errors'}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            type={'text'}
            name={'errors'}
            onChange={onChange}
            label={'Errors'}
            value={value}
            errors={error}
            displayErrors={true}
          />
        )}
      />
      <Input type="text" name="errors" label="Errors" placeholder="Errors" displayErrors={true} />
    </>
  );
};

export const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      label="Password"
      name="password"
      helper={'Doit inclure des lettres, des chiffres et au moins un caractère spécial.'}
      suffixIcon={
        <button
          style={{
            outline: 'none',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
          type="button"
          onClick={toggleShowPassword}
        >
          {showPassword ? (
            <EyeSlash width="1.25rem" height="1.25rem" color="#182240" />
          ) : (
            <Eye width="1.25rem" height="1.25rem" color="#182240" />
          )}
        </button>
      }
    />
  );
};
