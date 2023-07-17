import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Main.module.scss';
import Case from '../../components/case/Case';
import CustomButton from '../../components/button/CustomButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToDo } from './main.slice';

interface TMainProps {}

const Main: React.FC<TMainProps> = ({}) => {
  const dispatch = useAppDispatch();
  const toDos = useAppSelector((state) => state.mainReducer.toDos);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [toDoContent, setToDoContent] = useState<string>('');

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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
