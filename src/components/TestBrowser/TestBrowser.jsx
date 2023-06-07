import React from 'react'
import { BrowserHeader, BrowserSidebar, BrowserTextarea } from "./components/routes"

function TestBrowser({ test, setTest }) {

  return (
    <div className='bg-white w-full h-[495px] rounded-t-lg overflow-hidden'>
        <div className='h-8 bg-tabs-bar flex'>
        <img src='./../src/assets/test_browser/browser-buttons.svg' className='mx-3 w-10' alt='' />
        <div 
            className={`div-tab ${test === 1 ? 'bg-white' : ''}`}
            onClick={ () => setTest(1) }
        >
            <img src='./../src/assets/test_browser/chatgpt.webp' className='w-4 h-4' alt='' />
            <p className='text-xs'>ChatGPT</p>
        </div>
        <div 
            className={`div-tab ${test === 2 ? 'bg-white' : ''}`}
            onClick={ () => setTest(2) }
        >
            <img src='./../src/assets/test_browser/instagram.webp' className='w-4 h-4' alt='' />
            <p className='text-xs'>Instagram</p>
        </div>
        <div 
            className={`div-tab ${test === 3 ? 'bg-white' : ''}`}
            onClick={ () => setTest(3) }
        >
            <img src='./../src/assets/test_browser/gmail.webp' className='w-4 h-3' alt='' />
            <p className='text-xs'>Emails received</p>
        </div>
        </div>
        <div className='h-8 bg-white border-b border-slate-200'></div>

    {
        // styles for chatgpt test option
        test === 1 && (
            <>
            <div className="h-browser-calc flex">
                <BrowserSidebar test={ test } />
                <BrowserTextarea test={ test } />
            </div>
            </>
        )
    }
    {
        // styles for instagram test option
        test === 2 && (
            <div className='h-browser-calc flex'>
                <BrowserSidebar test={ test } />
                <div className="w-full h-full flex flex-col">
                    <BrowserHeader test={ test } />
                    <BrowserTextarea test={ test } />
                </div>
            </div>
        )
    }

    {
        // styles for mail test option
        test === 3 && (
            <div className='h-browser-calc flex gap-x-2'>
                <BrowserSidebar test={ test } />
                <div className='h-full w-full flex flex-col justify-between'>
                    <BrowserHeader test={ test } />
                    <BrowserTextarea test={ test } />
                    <div className='w-full h-12 px-4 flex items-center border-t border-slate-200'>
                        <div className='w-16 h-8 mr-3 bg-mail-sidebar-sec rounded-full'></div>    
                        <div className='w-6 h-6 mr-2 bg-mail-sidebar-thi rounded-sm'></div>    
                        <div className='w-6 h-6 mr-2 bg-mail-sidebar-thi rounded-sm'></div>    
                        <div className='w-6 h-6 mr-2 bg-mail-sidebar-thi rounded-sm'></div>
                        <div className='w-6 h-6 mr-2 bg-mail-sidebar-thi rounded-sm'></div>  
                        <div className='w-6 h-6 mr-2 bg-mail-sidebar-thi rounded-sm'></div>  
                        <div className='w-6 h-6 mr-2 bg-mail-sidebar-thi rounded-sm'></div>     
                    </div> 
                </div>
            </div>
        )        
    }
  </div>
  )
}

export default TestBrowser
