import React from 'react'

function Section({ sectionId, title, children, customClass, titleClass }) {
  return (
    <section className={`py-12 px-4 max-w-3xl mx-auto ${ customClass }`} id={ sectionId }>
      {
        title && <h1 className={`relative mb-3 text-lg md:text-2xl font-semibold ${titleClass} w-max px-5`}>
          { title } 
        </h1>
      }
      { children }
    </section>
  )
}

export default Section
