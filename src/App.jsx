import React from 'react'
import {
  Section
} from "./routes"
import './css/index.css'

function App() {

  return (
    <>
      <main>
        <Section 
          sectionId="home"
        >
          <h1>
              <span>Welcome to</span>
              SmartType
          </h1>
          <p>
            Empower your productivity with SmartType, the ultimate tool for automating your workflows and saving valuable time by eliminating repetitive typing tasks.
          </p>
          <p>
            It's as simple as typing a command like: <pre>/social</pre>
          </p>
          <div>
            <a href='#' aria-label="Get Started">Get Started</a>          
            <a href="#test" aria-label='Or Test It First'>Or Test It First</a>
          </div>
        </Section>
        <Section 
          sectionId="test"
          title="Test it yourself"
        >
          <h2>
            Type this: <pre></pre>
          </h2>
        </Section>
        <Section 
          sectionId="compatibility"
          title="Use SmartType anywhere you go!"
        >
          <h2>With Google Chrome, Microsoft Edge or Opera.</h2>
          <h2>Firefox Comming Soon!</h2>
          <div className='flex filter grayscale' >
            <img 
              src="./../src/assets/webp/bing.webp" alt="" className='w-1' />
            <img 
              src="./../src/assets/webp/fiverr.webp" alt="" className='w-1' />
            <img 
              src="./../src/assets/webp/gmail.webp" alt="" className='w-1' />
            <img 
              src="./../src/assets/webp/google_docs.webp" alt="" className='w-1' />
            <img 
              src="./../src/assets/webp/google_sheets.webp" alt="" className='w-1' />
            <img 
              src="./../src/assets/webp/linkedin.webp" alt="" className='w-1' />
            <img 
              src="./../src/assets/webp/twitter.webp" alt="" className='w-1' />
            <img 
              src="./../src/assets/webp/upwork.webp" alt="" className='w-1' />
            <img 
              src="./../src/assets/webp/youtube.webp" alt="" className='w-1' />
          </div>
        </Section>
        <footer>
          <p>Designed & built by Alexander Pérez</p>
        </footer>
      </main>
    </>
  )
}

export default App
