import React from 'react'

function BrowserSidebar({ test }) {
  return (
    <>
      {
        test === 1 && (
          <div 
            className='hidden md:block w-1/4 h-full bg-chatgpt-sidebar-pri py-2 px-3'
            aria-label='Browser Sidebar for ChatGPT Tab'
          >
              <div className='w-full h-9 bg-chatgpt-sidebar-sec mb-4 rounded-sm'></div>
              <div className='w-full h-9 bg-chatgpt-sidebar-sec mb-2 rounded-sm'></div>
              <div className='w-full h-9 bg-chatgpt-sidebar-sec mb-2 rounded-sm'></div>
          </div> 
        )
      }

      {
        test === 2 && (
           <div 
            className='hidden md:block w-1/4 bg-ig-sidebar-pri py-2 border-r border-slate-400'
            aria-label='Browser Sidebar for Instagram Tab'
           >
              <div className='w-full h-9 bg-ig-sidebar-pri mb-1 rounded-sm flex items-center justify-between px-2 gap-2'>
                  <div className='w-8 h-8 bg-ig-sidebar-sec rounded-full'></div>
                  <div className='w-20'>
                      <div className='w-20 h-2 bg-ig-sidebar-sec'></div>
                  </div>
                  <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
              </div>
              <div className='w-full h-9 bg-ig-sidebar-pri mb-1 rounded-sm flex items-center justify-between px-2 gap-2'>
                  <div className='w-8 h-8 bg-ig-sidebar-sec rounded-full'></div>
                  <div className='w-20'>
                      <div className='w-14 h-2 bg-ig-sidebar-sec'></div>
                  </div>
                  <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
              </div>
              <div className='w-full h-9 bg-ig-sidebar-pri mb-1 rounded-sm flex items-center justify-between px-2 gap-2'>
                  <div className='w-8 h-8 bg-ig-sidebar-sec rounded-full'></div>
                  <div className='w-20'>
                      <div className='w-16 h-2 bg-ig-sidebar-sec'></div>
                  </div>
                  <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
              </div>
              <div className='w-full h-9 bg-ig-sidebar-pri mb-1 rounded-sm flex items-center justify-between px-2 gap-2'>
                  <div className='w-8 h-8 bg-ig-sidebar-sec rounded-full'></div>
                  <div className='w-20'>
                      <div className='w-8 h-2 bg-ig-sidebar-sec'></div>
                  </div>
                  <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
              </div>
              <div className='w-full h-9 bg-ig-sidebar-pri mb-1 rounded-sm flex items-center justify-between px-2 gap-2'>
                  <div className='w-8 h-8 bg-ig-sidebar-sec rounded-full'></div>
                  <div className='w-20'>
                      <div className='w-14 h-2 bg-ig-sidebar-sec'></div>
                  </div>
                  <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
              </div>
              <div className='w-full h-9 bg-ig-sidebar-pri mb-1 rounded-sm flex items-center justify-between px-2 gap-2'>
                  <div className='w-8 h-8 bg-ig-sidebar-sec rounded-full'></div>
                  <div className='w-20'>
                      <div className='w-16 h-2 bg-ig-sidebar-sec'></div>
                  </div>
                  <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
              </div>
              <div className='w-full h-9 bg-ig-sidebar-pri mb-1 rounded-sm flex items-center justify-between px-2 gap-2'>
                  <div className='w-8 h-8 bg-ig-sidebar-sec rounded-full'></div>
                  <div className='w-20'>
                      <div className='w-14 h-2 bg-ig-sidebar-sec'></div>
                  </div>
                  <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
              </div>
              <div className='w-full h-9 bg-ig-sidebar-pri mb-1 rounded-sm flex items-center justify-between px-2 gap-2'>
                  <div className='w-8 h-8 bg-ig-sidebar-sec rounded-full'></div>
                  <div className='w-20'>
                      <div className='w-16 h-2 bg-ig-sidebar-sec'></div>
                  </div>
                  <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
              </div>
          </div>          
        )
      }
    
      {
        test === 3 && (
          <div className='hidden md:block w-4/12 bg-ig-sidebar-pri py-4 border-r border-slate-200'>
              <div className='w-24 h-10 ml-2 mb-5 bg-mail-sidebar-sec rounded-xl'></div>
              <div className='w-full px-4 flex flex-col gap-4'>
                  <div className='w-20 h-3 bg-mail-sidebar-thi rounded-full'></div>
                  <div className='w-24 h-3 bg-mail-sidebar-thi rounded-full'></div>
                  <div className='w-16 h-3 bg-mail-sidebar-thi rounded-full'></div>
                  <div className='w-22 h-3 bg-mail-sidebar-thi rounded-full'></div>

                  <div className='w-full h-max pl-4 flex gap-2'>
                      <div className='w-4 h-3 bg-mail-sidebar-thi rounded-full'></div>
                      <div className='w-full h-3 bg-mail-sidebar-thi rounded-full'></div>
                  </div>
                  <div className='w-full h-max pl-4 flex gap-2'>
                      <div className='w-4 h-3 bg-mail-sidebar-thi rounded-full'></div>
                      <div className='w-full h-3 bg-ig-sidebar-sec rounded-full'></div>
                  </div>
                  <div className='w-full h-max pl-4 flex gap-2'>
                      <div className='w-4 h-3 bg-mail-sidebar-thi rounded-full'></div>
                      <div className='w-full h-3 bg-ig-sidebar-sec rounded-full'></div>
                  </div>

                  <div className='w-24 h-3 bg-mail-sidebar-thi rounded-full'></div>
              </div>
          </div>          
        )
      }
    </>
  )
}

export default BrowserSidebar
