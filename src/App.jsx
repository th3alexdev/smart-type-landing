import React, { useContext } from 'react'
import {
  Bubble,
  ImageGallery,
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
          <h1 className='text-primary mb-5 md:mb-10 font-bold' role="heading" aria-level="1">
              <span className='text-black mr-0.5 block font-semibold text-4xl sm:text-5xl'>Welcome to</span>
              <span className='relative text-5xl sm:text-6xl'>
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
                <p className='inline w-max'>It's as simple as</p>
                <br className='3xs:hidden' />
                <p className='inline w-max'>typing a command like:</p>
                <div className='inline w-12 h-max pl-2 pr-3 py-1 bg-command rounded-md font-semibold ml-2'>
                  <span className='inline-block px-1.5 max-w-command line-1 anim-typewriter font-mono'>/socials</span>
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
              className='px-8 pt-2 h-9 bg-primary text-white rounded-md w-max font-medium hover:bg-primary-hov transition duration-300 ease-in-out'
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
          customClass='text-center grid place-items-center pb-40'
          titleClass='mb-4'
          ariaLabel='Browser Compatibility Section'
        >
          <div className='mb-4 md:mb-8 text-sm md:text-base'>
            <h2 className='font-normal mb-2'>With Google Chrome, <br /> Microsoft Edge or Opera.</h2>
            <h2 className='font-normal text-sm text-gray-600'>Firefox Comming Soon!</h2>
          </div>
          
          <div className='px-2 flex flex-col items-center justify-center max-w-md' aria-label='Supported Websites'>
            <ImageGallery />
          </div>
        </Section>
      </main>
      <footer className='pt-2 pb-14'>
        <div className='w-max mx-auto flex flex-col justify-center'>
          <h1 className='font-mono font-semibold mb-2'>Designed & Built by Alexander Pérez</h1>
          <div className='flex gap-2 justify-center items-center'>
            <h2 className='text-sm w-max h-max underline text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out'>
              <a  href='https://github.com/th3alexdev/smart-type' target='_blank' rel='noopener noreferrer'>View Project on GitHub</a>
            </h2>
            <div className='w-1 h-1 bg-gray-700 rounded-full'></div>
            <h2 className='text-sm w-max h-max underline text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out'>
              <a href='https://paypal.me/th3alexdev?country.x=VE&locale.x=es_XC' target='_blank' rel='noopener noreferrer'>Support the Project</a>
            </h2>
          </div>
        </div>

      </footer>
    </>
  )
}

export default App
