import React from 'react';
import styles from './Checkbox.module.scss';
import { clsx } from 'clsx';

type TCheckboxProps = {
  checked: boolean;
  onChange?: () => void;
  className?: string;
};

const Checkbox: React.FC<TCheckboxProps> = ({
  checked,
  onChange,
  className,
}) => {
  return (
    <div className={className}>
      <button
        className={clsx(styles.checkbox, { [styles.checked]: checked })}
        onClick={onChange}
      />
    </div>
  );
};

export default Checkbox;
