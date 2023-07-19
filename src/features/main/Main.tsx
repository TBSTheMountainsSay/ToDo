import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
import Case from '../../components/case/Case';
import CustomButton from '../../components/button/CustomButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addToDo,
  toggleCompleteToDo,
  deleteToDo,
  saveEditing,
} from './main.slice';
import CustomTextarea from '../../components/textarea/CustomTextarea';

interface TMainProps {}

const Main: React.FC<TMainProps> = ({}) => {
  const dispatch = useAppDispatch();
  const toDos = useAppSelector((state) => state.mainReducer.toDos);

  const [toDoContent, setToDoContent] = useState<string>('');
  const [editingId, setEditingId] = useState<number>(0);

  // const handleClickAway = (event: MouseEvent) => {
  //   document.removeEventListener('click', handleClickAway);
  // };
  //
  // const textarea = useRef(null);
  // document.addEventListener('click', handleClickAway);

  const handleWriteToDoContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setToDoContent(e.target.value);
    },
    []
  );

  const handleAddToDo = useCallback((toDoContent: string) => {
    dispatch(addToDo(toDoContent));
    setToDoContent('');
  }, []);

  const handleDeleteToDo = useCallback((id: number) => {
    dispatch(deleteToDo(id));
  }, []);

  const handleToggleCompleted = useCallback((id: number) => {
    dispatch(toggleCompleteToDo(id));
  }, []);

  const handleToggleEditToDo = useCallback(
    (id: number) => {
      setEditingId(id);
    },
    [editingId]
  );

  const handleSaveEditing = useCallback(
    (id: number, editingContent: string) => {
      dispatch(saveEditing({ id, editingContent }));
      setEditingId(0);
    },
    []
  );

  return (
    <div className={styles.main}>
      <div className={styles.input}>
        <CustomTextarea value={toDoContent} onChange={handleWriteToDoContent} />
        <CustomButton
          buttonName={'Добавить'}
          onClick={() => handleAddToDo(toDoContent)}
        />
      </div>
      <ul>
        {toDos.map((toDo) => {
          return (
            <Case
              id={toDo.id}
              toDoContent={toDo.toDoContent}
              isCompleted={toDo.isCompleted}
              handleDeleteToDo={() => handleDeleteToDo(toDo.id)}
              handleToggleCompleted={() => handleToggleCompleted(toDo.id)}
              handleToggleEditToDo={() => handleToggleEditToDo(toDo.id)}
              handleSaveEditing={(editingContent) =>
                handleSaveEditing(toDo.id, editingContent)
              }
              isEditing={editingId === toDo.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
