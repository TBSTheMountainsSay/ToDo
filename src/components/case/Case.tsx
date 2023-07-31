import React, { useState } from 'react';
import styles from './Case.module.scss';
import CustomButton from '../button/CustomButton';
import { TypeToDo } from '../../features/main/Main.types';
import { clsx } from 'clsx';
import Checkbox from '../checkbox/Checkbox';
import CustomTextarea from '../textarea/CustomTextarea';

interface TCaseProps extends TypeToDo {
  handleDeleteToDo: () => void;
  handleToggleCompleted: () => void;
  handleToggleEditToDo: () => void;
  handleSaveEditing: (editingContent: string) => void;
  isEditing: boolean;
}

const Case: React.FC<TCaseProps> = ({
  id,
  toDoContent,
  isCompleted,
  handleDeleteToDo,
  handleToggleCompleted,
  handleToggleEditToDo,
  handleSaveEditing,
  isEditing,
}) => {
  const [editingContent, setEditingContent] = useState<string>(toDoContent);

  const handleEditToDo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditingContent(event.target.value);
  };

  return (
    <div className={styles.case}>
      <Checkbox
        onChange={handleToggleCompleted}
        checked={isCompleted}
        className={styles.checkbox}
      />
      {isEditing ? (
        <div className={styles.editing}>
          <CustomTextarea value={editingContent} onChange={handleEditToDo} />
          <CustomButton
            buttonName={'Сохранить'}
            onClick={() => handleSaveEditing(editingContent)}
          />
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
