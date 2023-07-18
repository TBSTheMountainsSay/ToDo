import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
import Case from '../../components/case/Case';
import CustomButton from '../../components/button/CustomButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToDo, completedToDo, deleteToDo } from './main.slice';

interface TMainProps {}

const Main: React.FC<TMainProps> = ({}) => {
  const dispatch = useAppDispatch();
  const toDos = useAppSelector((state) => state.mainReducer.toDos);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [toDoContent, setToDoContent] = useState<string>('');
  const [Editing, setEditing] = useState<number>(0);

  const handleWriteToDoContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setToDoContent(e.target.value);
    },
    []
  );

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '1.5rem';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [toDoContent]);

  const handleAddToDo = useCallback((toDoContent: string) => {
    dispatch(addToDo(toDoContent));
    setToDoContent('');
  }, []);

  const handleDeleteToDo = useCallback((id: number) => {
    dispatch(deleteToDo(id));
  }, []);

  const handleToggleCompleted = useCallback((id: number) => {
    dispatch(completedToDo(id));
  }, []);

  const handleToggleEditToDo = useCallback(
    (id: number) => {
      setEditing(id);
    },
    [Editing]
  );

  return (
    <div className={styles.main}>
      <div className={styles.input}>
        <div className={styles.textarea}>
          <textarea
            ref={textareaRef}
            value={toDoContent}
            onChange={handleWriteToDoContent}
          />
        </div>
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
              Editing={Editing}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
