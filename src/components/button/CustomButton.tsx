import React from 'react';
import styles from './CustomButton.module.scss';
import clsx from 'clsx';

type TCustomButtonProps = {
  buttonName: string;
  onClick?: () => void;
  className?: string;
};

const CustomButton: React.FC<TCustomButtonProps> = ({
  buttonName,
  onClick,
  className,
}) => {
  return (
    <div className={clsx(styles.button, className)}>
      <button onClick={onClick}>{buttonName}</button>
    </div>
  );
};

export default CustomButton;
