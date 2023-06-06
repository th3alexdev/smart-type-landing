import React, { useState } from 'react'
import {
  Bubble,
  Section,
  TestOptions
} from "./routes"
import './css/index.css'

function App() {

  const [test, setTest] = useState(1);

  return (
    <>
      <main>
        <Section 
          sectionId="home"
          customClass="pt-16"
        >
          <h1 className='text-primary mb-3.5 md:mb-10 font-bold'>
              <span className='text-black mr-0.5 block font-semibold text-3xl sm:text-5xl'>Welcome to</span>
              <span className='relative text-4xl sm:text-6xl'>
                SmartType
                <span className='absolute right-[-30px] w-5 h-5 md:w-6 md:h-6 bg-blink after:absolute bg-contain'></span>
              </span>
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-5 md:px-3 items-center md:mb-5'>
            <div className='md:h-max mb-4 md:col-start-1 md:col-end-4'>
              <p className='mb-5'>
                Empower your productivity with SmartType, the ultimate tool for automating your workflows and saving valuable time by eliminating repetitive typing tasks.
              </p>
              <p className='mb-3.5 inline'>
                It's as simple as typing a command like: 
                <pre className='inline h-max px-2.5 py-1 bg-command rounded-md font-semibold ml-2'>/socials</pre>
              </p>
            </div>
            <Bubble 
              customClass="md:col-start-4 md:col-end-6"
              mainText="Follow me!"
              user="@your_user"
            />
          </div>
          <div className='ml-4 flex flex-col items-center md:items-center h-max gap-3 md:w-max'>
            <a 
              href='#' aria-label="Get Started" 
              className='px-8 py-1.5 bg-primary text-white rounded-md w-max font-medium'
            > Get Started
            </a>          
            <a
              href="#test" aria-label='Or Test It First'
              className='text-xs w-max h-max underline'
            > Or Test It First
            </a>
          </div>
        </Section>
        <Section 
          sectionId="test"
          title="Test it yourself"
          titleClass="mb-12"
        >
          <div className='px-8'>
            <TestOptions
              test={ test }
              setTest={ setTest }
            />
            <div className='flex mb-2 items-center'>
              <h2 className='inline mr-2 h-max'>
                Type this: 
              </h2>
              <div className='font-bold flex gap-2 rounded-md'>
                <pre className='inline px-2 py-0.5 rounded-sm bg-command '>/</pre>
                <pre className='inline px-2 py-0.5 rounded-sm bg-command'>p</pre>
                <pre className='inline px-2 py-0.5 rounded-sm bg-command'>r</pre>
                <pre className='inline px-2 py-0.5 rounded-sm bg-command'>o</pre>
                <pre className='inline px-2 py-0.5 rounded-sm bg-command'>m</pre>
                <pre className='inline px-2 py-0.5 rounded-sm bg-command'>p</pre>
                <pre className='inline px-2 py-0.5 rounded-sm bg-command'>t</pre>
              </div>
            </div>
          </div>
        </Section>
        <Section 
          sectionId="compatibility"
          title={`Use SmartType anywhere you go!`}
          customClass="text-center grid place-items-center pb-32"
          titleClass="mb-4"
        >
          <div className='mb-4 md:mb-8 text-sm md:text-base'>
            <h2 className='font-normal mb-2'>With Google Chrome, <br /> Microsoft Edge or Opera.</h2>
            <h2 className='font-normal'>Firefox Comming Soon!</h2>
          </div>
          
          <div className='px-2 flex flex-col items-center justify-center max-w-md'>
            <div className='filter grayscale flex items-center flex-wrap justify-between gap-y-4 gap-x-1 md:gap-x-9'>
              <img 
                src="./../src/assets/webp/chatgpt.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' /> 
              <img 
                src="./../src/assets/webp/bing.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
              <img 
                src="./../src/assets/webp/fiverr.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
              <img 
                src="./../src/assets/webp/gmail.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
              <img 
                src="./../src/assets/webp/google_docs.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
              <img 
                src="./../src/assets/webp/google_sheets.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
              <img 
                src="./../src/assets/webp/linkedin.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
              <img 
                src="./../src/assets/webp/twitter.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
              <img 
                src="./../src/assets/webp/upwork.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
              <img 
                src="./../src/assets/webp/youtube.webp" alt="" className='w-1/6 md:3/12 max-w-[50px]' />
            </div>
          </div>

        </Section>
      </main>
    </>
  )
}

export default App
