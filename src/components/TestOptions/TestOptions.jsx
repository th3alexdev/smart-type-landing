import React, { useState } from 'react'

export default function TestOptions({ test, setTest }) {

  return (
    <>
        <h2 className='mb-2  text-center font-medium'>Choose one!</h2>
        <div className='h-max relative mb-6 md:mb-8'>
          <ul className='relative z-20 mx-auto flex flex-col sm:flex-row gap-3 md:gap-5 text-center max-w-2xl'>
            <li className='sm:w-1/3 md:w-max'>
              <button 
                className={`min-w-full sm:w-full md:w-auto min-h-full px-2 py-2 ${test === 1 ? 'bg-yellow' : 'bg-btnGray bg-lines bg-fill'}`}
                aria-label='Improve text writing prompts in ChatGPT'
                onClick={() => { 
                  setTest(1) 
                }}>
                Specific message for ChatGPT to do a certain task 
              </button>
            </li>
            <li className='sm:w-1/3 md:w-max'>
              <button 
                className={`min-w-full sm:w-full md:w-auto min-h-full px-2 py-2 ${test === 2 ? 'bg-yellow' : 'bg-btnGray bg-lines bg-fill'}`}
                aria-label='Automate responses in your Instagram Store'
                onClick={() => { 
                  setTest(2) 
                }}>
                Quick response in your online store for a client
              </button>
            </li>
            <li className='sm:w-1/3 md:w-max'>
              <button 
                className={`min-w-full sm:w-full md:w-auto min-h-full px-2 py-2 ${test === 3 ? 'bg-yellow' : 'bg-btnGray bg-lines bg-fill'}`}
                aria-label='Send a repetitive message in LinkedIn'
                onClick={() => { 
                  setTest(3) 
                }}>
                Send a repetitive email to your teamwork
              </button>
            </li>
          </ul>
        <div className='hidden md:block absolute z-10 inset-y-1/2 w-full h-0.5 bg-[#B3B3B3]'></div>
      </div>
    </>
  )
}
