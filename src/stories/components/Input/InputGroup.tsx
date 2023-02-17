import { HTMLAttributes } from 'react';
import './input.scss';

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  name?: string;
  helper?: string;
  errors?: any;
  children: JSX.Element;
}

const InputGroup = ({ label, name, helper, errors, children }: InputGroupProps) => {
  return (
    <div className={'input-group'}>
      {label && (
        <label className={'input-label'} htmlFor={name}>
          {label}
        </label>
      )}
      {children}
      {(helper || errors) && (
        <div className={['helper-text', errors && 'error'].join(' ')}>
          {helper || errors.message || errors.type}
        </div>
      )}
    </div>
  );
};

export default InputGroup;
