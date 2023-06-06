import React, { useState } from 'react'

export default function TestOptions({ test, setTest }) {

  const handleButtonClick = (testId) => {
    setTest(testId);
  };

  return (
    <>
      <h2 className='mb-2 text-center font-medium'>Choose one!</h2>
      <ul className='mb-2 md:mb-8 mx-auto flex flex-col sm:flex-row gap-3 md:gap-5 text-center max-w-2xl'>
        <li className=''>
          <button 
            className={`h-16 px-2 py-2 ${test === 1 ? 'bg-yellow' : 'bg-btnGray bg-lines bg-fill'}`}
            aria-label='Improve text writing prompts in ChatGPT'
            onClick={() => { 
              setTest(1) 
            }}>
            Specific message for ChatGPT to do a certain task 
          </button>
        </li>
        <li>
          <button 
            className={`w-auto h-16 px-2 py-2 ${test === 2 ? 'bg-yellow' : 'bg-btnGray bg-lines bg-fill'}`}
            aria-label='Automate responses in your Instagram Store'
            onClick={() => { 
              setTest(2) 
            }}>
            Quick response in your online store for a client
          </button>
        </li>
        <li>
          <button 
            className={`w-auto h-16 px-2 py-2 ${test === 3 ? 'bg-yellow' : 'bg-btnGray bg-lines bg-fill'}`}
            aria-label='Send a repetitive message in LinkedIn'
            onClick={() => { 
              setTest(3) 
            }}>
            Send a repetitive message in LinkedIn
          </button>
        </li>
      </ul>
    </>
  )
}
