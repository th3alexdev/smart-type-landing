import React, { useContext } from 'react'
import {
  Bubble,
  Section,
  TestBrowser,
  TestCommand,
  TestOptions
} from './routes'
import './css/index.css'

function App() {

  return (
    <>
      <main>
        <Section 
          sectionId='home'
          customClass='pt-24'
          ariaLabel='Home Section'
        >
          <h1 className='text-primary mb-3.5 md:mb-10 font-bold' role="heading" aria-level="1">
              <span className='text-black mr-0.5 block font-semibold text-3xl sm:text-5xl'>Welcome to</span>
              <span className='relative text-4xl sm:text-6xl'>
                SmartType
                <span className='absolute right-[-30px] w-5 h-5 md:w-6 md:h-6 bg-blink after:absolute bg-contain'></span>
              </span>
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-5 md:px-3 items-center md:mb-5'>
            <div className='md:h-max mb-4 md:col-start-1 md:col-end-4'>
              <p className='mb-5'>
                Empower your productivity with SmartType, the ultimate browser extension for automating your workflows and saving valuable time by eliminating repetitive typing tasks.
              </p>
              <div className='inline mb-3.5'>
                <p className='inline w-max'>
                It's as simple as typing a command like: 
                </p>
                <div className='inline w-12 h-max px-1 pr-3 py-1 bg-command rounded-md font-semibold ml-2'>
                  <span className='inline-block px-1.5 max-w-[70px] line-1 anim-typewriter'>/socials</span>
                </div>
              </div>
            </div>
            <Bubble 
              customClass='md:col-start-4 md:col-end-6'
              mainText='Follow me!'
              user='@your_user'
            />
          </div>
          <div className='ml-4 flex flex-col items-center md:items-center h-max gap-3 md:w-max'>
            <a 
              href='#' 
              aria-label='Get Started' 
              className='px-8 py-1.5 bg-primary text-white rounded-md w-max font-medium hover:bg-primary-hov transition duration-300 ease-in-out'
            > Get Started
            </a>          
            <a
              href='#test' aria-label="Or Test It First"
              className='text-xs w-max h-max underline text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out'
            > Or Test It First
            </a>
          </div>
        </Section>
        <Section 
          sectionId='test'
          title='Test it yourself'
          titleClass='mb-12'
          ariaLabel='Test Section'
        >
          <div className='px-8'>
            <TestOptions />
            <TestCommand />
          </div>
          <TestBrowser />
        </Section>
        <Section 
          sectionId='compatibility'
          title={`Use SmartType anywhere you go!`}
          customClass='text-center grid place-items-center pb-44'
          titleClass='mb-4'
          ariaLabel='Browser Compatibility Section'
        >
          <div className='mb-4 md:mb-8 text-sm md:text-base'>
            <h2 className='font-normal mb-2'>With Google Chrome, <br /> Microsoft Edge or Opera.</h2>
            <h2 className='font-normal text-sm text-gray-600'>Firefox Comming Soon!</h2>
          </div>
          
          <div className='px-2 flex flex-col items-center justify-center max-w-md' aria-label='Supported Websites'>
            <div className='filter grayscale flex items-center flex-wrap justify-between gap-y-4 gap-x-1 md:gap-x-9'>
              <img 
                src='./../src/assets/webp/chatgpt.webp' alt='ChatGPT logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' /> 
              <img 
                src='./../src/assets/webp/bing.webp' alt='Bing logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
              <img 
                src='./../src/assets/webp/fiverr.webp' alt='Fiverr logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
              <img 
                src='./../src/assets/webp/gmail.webp' alt='Gmail logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
              <img 
                src='./../src/assets/webp/google_docs.webp' alt='Google Docs logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
              <img 
                src='./../src/assets/webp/google_sheets.webp' alt='Google Sheets logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
              <img 
                src='./../src/assets/webp/linkedin.webp' alt='LikedIn logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
              <img 
                src='./../src/assets/webp/twitter.webp' alt='Twitter logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
              <img 
                src='./../src/assets/webp/upwork.webp' alt='Upwork logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
              <img 
                src='./../src/assets/webp/youtube.webp' alt='Youtube logo' 
                className='w-1/6 md:3/12 max-w-[50px]' aria-hidden='true' />
            </div>
          </div>
        </Section>
      </main>
      <footer className='pt-4 pb-14'>
        <div className='w-max mx-auto flex flex-col justify-center'>
          <h1 className='font-mono font-semibold mb-2'>Designed & Built by Alexander Pérez</h1>
          <div className='flex gap-2 justify-center items-center'>
            <h2 className='text-sm w-max h-max underline text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out'>
              <a  href='https://github.com/th3alexdev/smart-type' target='_blank' rel='noopener noreferrer'>View Project on GitHub</a>
            </h2>
            <div className='w-1 h-1 bg-gray-700 rounded-full'></div>
            <h2 className='text-sm w-max h-max underline text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out'>
              <a href='#' target='_blank' rel='noopener noreferrer'>Support the Project</a>
            </h2>
          </div>
        </div>

      </footer>
    </>
  )
}

export default App
