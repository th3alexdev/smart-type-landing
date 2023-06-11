import React, { useRef, useState, useEffect, useContext } from 'react'
import { expandShortcut } from '../../../utils/expandShortcut';
import { ManageContext } from '../../../contexts/ContextProvider';

function BrowserTextarea({ containerRef }) {
  const textareaRef = useRef(null);
  const { 
    test,
    inputValue,
    setInputValue,
    command
  } = useContext(ManageContext);

  const [disabledCurrent, setDisabledCurrent] = useState(false)

  useEffect(() => {
    if(inputValue === '') setDisabledCurrent(false)
  }, [inputValue]);


  const handleInputChange = (e) => {
    if (command === e.target.value) {
      setDisabledCurrent(true);
    }

    setInputValue(e.target.value);

    if(!disabledCurrent) {
      expandShortcut({ e, command, setInputValue, textareaRef, parentRef: containerRef });
    }
  };

  const handleKeyDown = (e) => {
    if(test === 3) return
    
    if(e.keyCode === 13) {
      textareaRef.current.style.height = '48px';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }

  const config = {
    1: {
      className: 'px-8 py-6',
      inputClassName: 'h-12 px-4 rounded-lg border shadow-md max-h-36',
    },
    2: {
      className: 'h-full px-8 py-6',
      inputClassName: 'h-12 px-6 rounded-xl border shadow-m max-h-96',
    },
    3: {
      className: 'h-[260px]',
      inputClassName: 'px-6 h-64',
    },
  };

  const { className, inputClassName } = config[test] || {};

  return (
     <div className={`w-full flex items-end ${className}`}>
      <div className='container mx-auto mt-4'>
        <textarea 
          placeholder='Type here!'
          className={`w-full py-2.5 ${inputClassName} resize-none`}
          onChange={ handleInputChange }
          onKeyDown={ (e) => handleKeyDown(e) }
          value={ inputValue }
          disabled={ disabledCurrent }
          ref={ textareaRef }
          aria-disabled={ disabledCurrent }
          aria-describedby="textarea"
        ></textarea>
      </div>
    </div>
  )
}

export default BrowserTextarea
