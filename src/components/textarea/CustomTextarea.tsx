import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomTextarea.module.scss';

type TCustomTextareaProps = {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  value?: string;
  placeholder: string;
};

const CustomTextarea: React.FC<TCustomTextareaProps> = ({
  onChange,
  className,
  value,
  placeholder,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '1.5rem';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  return (
    <div className={styles.textarea}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomTextarea;
