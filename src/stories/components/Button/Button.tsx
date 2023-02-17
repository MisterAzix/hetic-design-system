import React, { ButtonHTMLAttributes } from 'react';
import { Color, Size, Variant } from '../../types';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button = ({
  variant = 'filled',
  color = 'primary',
  size = 'md',
  children,
  disabled = false,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[`btn`, `btn-${color}`, `btn-${variant}`, `btn-${size}`].join(' ')}
      type="button"
      disabled={disabled}
      {...props}
    >
      <div className={'btn-content'}>
        {startIcon && <div className={'btn-icon'}>{startIcon}</div>}
        <div className={'btn-label'}>{children}</div>
        {endIcon && <div className={'btn-icon'}>{endIcon}</div>}
      </div>
    </button>
  );
};
