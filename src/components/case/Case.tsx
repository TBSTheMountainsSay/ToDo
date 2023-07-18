import React from 'react';
import styles from './Case.module.scss';
import CustomButton from '../button/CustomButton';
import { TypeToDo } from '../../features/main/Main.types';
import { clsx } from 'clsx';
import Checkbox from '../checkbox/Checkbox';

interface TCaseProps extends TypeToDo {
  handleDeleteToDo: () => void;
  handleToggleCompleted: () => void;
  handleToggleEditToDo: () => void;
  Editing: number;
}

const Case: React.FC<TCaseProps> = ({
  id,
  toDoContent,
  isCompleted,
  handleDeleteToDo,
  handleToggleCompleted,
  handleToggleEditToDo,
  Editing,
}) => {
  return (
    <div className={styles.case}>
      <Checkbox
        onChange={handleToggleCompleted}
        checked={isCompleted}
        className={styles.checkbox}
      />
      {Editing ? (
        <div className={styles.editing}>
          <div className={styles.textarea}>
            <textarea value={toDoContent} />
          </div>
          <CustomButton buttonName={'Сохранить'} />
        </div>
      ) : (
        <div
          className={clsx(styles.task, { [styles.completed]: isCompleted })}
          onClick={handleToggleEditToDo}
        >
          {toDoContent}
        </div>
      )}

      <CustomButton
        buttonName={'Удалить'}
        onClick={handleDeleteToDo}
        className={styles.customButton}
      />
    </div>
  );
};

export default Case;
