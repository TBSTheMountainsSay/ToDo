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
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleEditToDo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditingContent(event.target.value);
    if (editingContent.replaceAll(' ', '').length <= 1) {
      setIsActive(true);
    }
    if (editingContent.replaceAll(' ', '').length > 1) {
      setIsActive(false);
    }
    console.log(editingContent);
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
          <CustomTextarea
            value={editingContent}
            onChange={handleEditToDo}
            placeholder={'Изменить задачу'}
          />
          <CustomButton
            buttonName={'Сохранить'}
            onClick={() => handleSaveEditing(editingContent)}
            disabled={isActive}
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
