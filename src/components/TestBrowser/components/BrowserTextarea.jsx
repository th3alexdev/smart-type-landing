import React from 'react'

function BrowserTextarea({ test }) {
  return (
    <>
      {
        test === 1 && (
          <div className='w-full flex items-end px-8 py-6'>
              <input 
              placeholder='Type here!'
              type="text"
              className='w-full h-12  px-4 rounded-lg border shadow-md'
              />
          </div>
        )
      }
      {
        test === 2 && (
          <div className='w-full h-full flex items-end px-8 py-6'>
              <input 
              placeholder='Type here!'
              type="text"
              className='w-full h-12  px-6 rounded-full border shadow-md'
              />
          </div>          
        )
      }
      {
        test === 3 && (
          <div className='w-full h-[260px] flex items-end bg-red-500'>
              <input 
              placeholder='Type here!'
              type="text"
              className='w-full h-full px-6'
              />
          </div>          
        )
      }
    </>
  )
}

export default BrowserTextarea
