import React from 'react';
import styles from './CustomButton.module.scss';
import clsx from 'clsx';

type TCustomButtonProps = {
  buttonName: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const CustomButton: React.FC<TCustomButtonProps> = ({
  buttonName,
  onClick,
  className,
  disabled,
}) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick} disabled={disabled}>
        {buttonName}
      </button>
    </div>
  );
};

export default CustomButton;
