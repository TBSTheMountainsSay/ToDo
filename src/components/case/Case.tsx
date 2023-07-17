import React from 'react';
import styles from './Case.module.scss';
import CustomButton from '../button/CustomButton';
import { TypeToDo } from '../../features/main/Main.types';

interface TCaseProps extends TypeToDo {}

const Case: React.FC<TCaseProps> = ({ id, toDoContent, isCompleted }) => {
  return (
    <div className={styles.case}>
      <input type="checkbox" />
      <div className={styles.task}>{toDoContent}</div>
      <CustomButton buttonName={'Изменить'} />
      <CustomButton buttonName={'Удалить'} />
    </div>
  );
};

export default Case;
