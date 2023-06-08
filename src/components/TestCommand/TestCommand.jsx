import React from 'react'


function TestCommand({ command }) {

  return (
        <div className='flex mb-5 items-center'>
            <h2 className='inline mr-2 h-max'>
                Type this: 
            </h2>

            <div className='font-medium flex gap-2 rounded-md'>
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
