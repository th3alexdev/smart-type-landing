import React from 'react'

function BrowserHeader({ test }) {
  return (
    <>
        {
        test === 2 && (
            <div className='w-full h-12 bg-white flex items-center px-3 justify-between gap-2 border-b border-slate-400'>
                <div className='w-10 h-8 bg-ig-sidebar-sec rounded-full'></div>
                <div className='w-full'>
                    <div className='w-24 h-2 bg-ig-sidebar-sec'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
                    <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
                    <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
                </div>
            </div>
            )
        }
        {
        test === 3 && (
            <div className='w-full h-max py-2 px-3 bg-white flex gap-2 border-b border-slate-200 flex-col'>
                <div className='w-10 h-10 bg-ig-sidebar-sec rounded-full'></div>
                <div className='w-48 h-3 bg-ig-sidebar-sec'></div>
                <div className='w-full h-max flex gap-2'>
                    <div className='w-8 h-2 bg-ig-sidebar-sec'></div>
                    <div className='w-6 h-2 bg-ig-sidebar-sec'></div>
                    <div className='w-12 h-2 bg-ig-sidebar-sec'></div>
                    <div className='w-4 h-2 bg-ig-sidebar-sec'></div>
                </div>
                <div className='flex gap-2'>
                    <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
                    <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
                    <div className='w-4 h-4 bg-ig-sidebar-sec rounded-sm'></div>
                </div>
            </div>  
            )
        }
    </>
  )
}

export default BrowserHeader
