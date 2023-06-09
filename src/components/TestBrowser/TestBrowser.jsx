import React from 'react'
import { BrowserHeader, BrowserSidebar, BrowserTextarea, BrowserTab } from "./components/routes"

function TestBrowser({ test, setTest, inputValue, setInputValue, toggleOptions, command }) {    
      
    const tabs = [
        {
          imgPath: './../src/assets/test_browser/chatgpt.webp',
          text: 'ChatGPT',
          testValue: 1,
        },
        {
          imgPath: './../src/assets/test_browser/instagram.webp',
          text: 'Instagram',
          testValue: 2,
        },
        {
          imgPath: './../src/assets/test_browser/gmail.webp',
          text: 'Emails received',
          testValue: 3,
        },
    ];


    const renderContent = {
        1: (
            <>
                <BrowserTextarea test={ test } setInputValue={ setInputValue } inputValue={ inputValue } command={ command }/>
            </>
        ),
        2: (
            <>
                <div className="w-full h-full flex flex-col">
                    <BrowserHeader test={ test } />
                    <BrowserTextarea test={ test } setInputValue={ setInputValue } inputValue={ inputValue }  command={ command }/>
                </div>                
            </>
        ),
        3: (
            <>
                <div className='h-full w-full flex flex-col justify-between'>
                    <BrowserHeader test={ test } />
                    <BrowserTextarea test={ test } setInputValue={ setInputValue } inputValue={ inputValue } command={ command }/>
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
            </>
        )
    }


  return (
    <div className='bg-white w-full h-[495px] rounded-t-lg overflow-hidden'>
        <div className='h-8 bg-tabs-bar flex'>
            <img src='./../src/assets/test_browser/browser-buttons.svg' className='mx-3 w-10' alt='' />
            {
            tabs.map((tab, index) => (
            <BrowserTab
                key={index}
                imgPath={tab.imgPath}
                text={tab.text}
                isSelected={test === tab.testValue}
                onClick={ () => {
                    setTest(tab.testValue) 
                    toggleOptions()  
                }} 
                customClass={ tab.testValue === 3 ? 'w-4 h-3' : null }
            />
            ))
            }
        </div>
        <div className='h-8 bg-white border-b border-slate-200'></div>

        <div className="h-browser-calc flex"> 
            <BrowserSidebar test={test} />
            { renderContent[test] } 
        </div>
  </div>
  )
}

export default TestBrowser
