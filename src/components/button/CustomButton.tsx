import React from 'react';
import styles from './CustomButton.module.scss';

type TCustomButtonProps = { buttonName: string; onClick?: () => void };

const CustomButton: React.FC<TCustomButtonProps> = ({
  buttonName,
  onClick,
}) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick}>{buttonName}</button>
    </div>
  );
};

export default CustomButton;
