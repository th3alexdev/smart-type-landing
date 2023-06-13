import React, { useRef, useContext } from 'react'
import { BrowserHeader, BrowserSidebar, BrowserTextarea, BrowserTab } from './components/routes'
import { ManageContext } from '../../contexts/ContextProvider';

import chatgptIcon from './../../assets/test_browser/chatgpt.webp';
import instagramIcon from './../../assets/test_browser/instagram.webp';
import gmailIcon from './../../assets/test_browser/gmail.webp';
import windowBtns from './../../assets/test_browser/browser-buttons.svg';

function TestBrowser({ }) {    

    const { 
        test, 
        setTest,
        handleToggleOptions,
    } = useContext(ManageContext)


    const browserContainerRef = useRef('null')    

    const tabs = [
        {
          imgPath: chatgptIcon,
          text: 'ChatGPT',
          testValue: 1,
        },
        {
          imgPath: instagramIcon,
          text: 'Instagram',
          testValue: 2,
        },
        {
          imgPath: gmailIcon,
          text: 'Emails received',
          testValue: 3,
        },
    ];


    const renderContent = {
        1: (
            <>
                <BrowserTextarea containerRef={ browserContainerRef } 
                role='tabpanel' aria-labelledby="tab-content-1"/>
            </>
        ),
        2: (
            <>
                <div className='w-full h-full flex flex-col' role="tabpanel" 
                aria-labelledby="tab-content-1">
                    <BrowserHeader test={ test } />
                    <BrowserTextarea containerRef={ browserContainerRef } />
                </div>                
            </>
        ),
        3: (
            <>
                <div className='h-full w-full flex flex-col justify-between'
                role="tabpanel" aria-labelledby="tab-content-1">
                    <BrowserHeader test={ test } />
                    <BrowserTextarea containerRef={ browserContainerRef } />
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
    <div 
        className='bg-white w-full h-browser-h rounded-t-lg overflow-hidden shadow-lg'
        ref={ browserContainerRef }
        role='region'
        aria-label='Browser'
    >
        <div className='h-8 bg-tabs-bar flex' role='tablist' aria-label='Browser Tabs'>
            <img src={ windowBtns } className='mx-3 w-10' alt='trhee macOS window buttons' />
            {
            tabs.map((tab, index) => (
            <BrowserTab
                key={index}
                imgPath={tab.imgPath}
                text={tab.text}
                isSelected={test === tab.testValue}
                onClick={ () => {
                    setTest(tab.testValue) 
                    handleToggleOptions()  
                }} 
                customClass={ tab.testValue === 3 ? 'w-4 h-3' : null }
                aria-controls={`tab-content-${tab.testValue}`}
            />
            ))
            }
        </div>
        <div className='h-8 bg-white border-b border-slate-200'></div>

        <div className='h-browser-calc flex' role='group'> 
            <BrowserSidebar test={test} />
            { renderContent[test] } 
        </div>
  </div>
  )
}

export default TestBrowser
