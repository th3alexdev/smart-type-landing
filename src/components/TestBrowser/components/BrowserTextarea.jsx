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

  // Disable the current textarea if inputValue is empty
  useEffect(() => {
    if(inputValue === '') setDisabledCurrent(false)
  }, [inputValue]);

  // Handle input change event
  const handleInputChange = (e) => {
    if (command === e.target.value) {
      setDisabledCurrent(true);
    }

    setInputValue(e.target.value);

    if(!disabledCurrent) {
      expandShortcut({ e, command, setInputValue, textareaRef, parentRef: containerRef });
    }
  };

  // Handle key down event
  const handleKeyDown = (e) => {
    if(test === 3) return
    
    if(e.keyCode === 13) { // Enter Key
      textareaRef.current.style.height = '48px';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }

  // Configuration object for different test cases
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

  // Destructure the className and inputClassName from the config based on the test value
  const { className, inputClassName } = config[test] || {};

  return (
     <div className={`w-full flex items-end ${className}`}>
      <div className='container mx-auto mt-4'>
        <textarea 
          placeholder='Type here!'
          className={`w-full pt-textarea pb-textarea ${inputClassName} resize-none`}
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
