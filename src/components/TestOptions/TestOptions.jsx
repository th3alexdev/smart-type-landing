import React, { useContext } from 'react'
import { ManageContext } from '../../contexts/ContextProvider';

export default function TestOptions({ }) {
  const { test, setTest, handleToggleOptions } = useContext(ManageContext);

  const options = [
    {
      id: 1,
      label: 'Specific message for ChatGPT to do a certain task',
      ariaLabel: 'Improve text writing prompts in ChatGPT',
    },
    {
      id: 2,
      label: 'Quick response in your online store for a client',
      ariaLabel: 'Automate responses in your Instagram Store',
    },
    {
      id: 3,
      label: 'Send a repetitive email to your teamwork',
      ariaLabel: 'Send a repetitive email to your teamwork',
    },
  ];
  
  const handleClick = (id) => {
    setTest(id);
    handleToggleOptions();
  };

  return (
    <>
      <h2 className='mb-2  text-center font-medium'>Choose one!</h2>
      <div className='h-max relative mb-6 md:mb-8'>
          <ul 
            className='relative z-20 mx-auto flex flex-col sm:flex-row gap-3 md:gap-5 text-center max-w-2xl'
            role='group' aria-label='Test Options'
          >
            {
              options.map((option) => (
                <li className='sm:w-1/3 md:w-max' key={ option.id }> 
                  <button 
                    className={`min-w-full sm:w-full md:w-auto min-h-full px-2 py-2 ${test === option.id ? 'bg-yellow' : 'bg-btnGray bg-lines bg-fill'}`}
                    aria-label={ option.ariaLabel }
                    onClick={ () => handleClick(option.id) }
                    >
                    { option.label }
                  </button>
                </li>
              ))
            }
          </ul>
        <div className='hidden md:block absolute z-10 inset-y-1/2 w-full h-0.5 bg-[#B3B3B3]'></div>
      </div>
    </>
  )
}
