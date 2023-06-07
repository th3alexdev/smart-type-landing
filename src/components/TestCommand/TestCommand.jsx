import React from 'react'


function TestCommand({ test }) {
    
    const COMMANDS = {
        1: '/prompt',
        2: '/quick',
        3: '/mail'
    }

    const command = COMMANDS[test];

  return (
        <div className='flex mb-5 items-center'>
            <h2 className='inline mr-2 h-max'>
                Type this: 
            </h2>

            <div className='font-bold flex gap-2 rounded-md'>
                {
                command.split('').map((letter, index) => (
                <pre key={index} className="inline px-2 py-0.5 rounded-sm bg-command">
                    {letter}
                </pre>
                ))
                }
            </div>
        </div>
  )
}

export default TestCommand
