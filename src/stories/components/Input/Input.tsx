import React, { InputHTMLAttributes } from 'react';
import InputGroup from './InputGroup';
import './input.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  helper?: string;
  errors?: any;
  placeholder?: string;
  displayErrors?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export function Input({
  type = 'text',
  label,
  name,
  helper,
  errors,
  placeholder,
  autoFocus = false,
  disabled = false,
  prefixIcon,
  suffixIcon,
  ...props
}: InputProps) {
  return (
    <InputGroup label={label} name={name} helper={helper} errors={errors}>
      <div className={['input-container', errors && 'error'].join(' ')}>
        {prefixIcon && <div className={'input-adornment prefix'}>{prefixIcon}</div>}
        <input
          className={'input'}
          id={name}
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          disabled={disabled}
          {...props}
        />
        {suffixIcon && <div className={'input-adornment suffix'}>{suffixIcon}</div>}
      </div>
    </InputGroup>
  );
}
