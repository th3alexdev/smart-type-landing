import React from 'react'

function Section({ sectionId, title, children, customClass, titleClass, ariaLabel }) {
  return (
    <section 
      role='region' 
      className={`py-12 px-4 max-w-3xl mx-auto ${ customClass }`} id={ sectionId }
      aria-label={ariaLabel ? ariaLabel : ''}
    >
      {
        title && <h1 
        className={`relative mb-3 text-lg md:text-2xl font-semibold ${titleClass} w-max px-5`}
        role="heading"
        aria-level="1"
        >
          { title } 
        </h1>
      }
      { children }
    </section>
  )
}

export default Section
