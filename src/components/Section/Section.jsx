import React from 'react'

function Section({ sectionId, title, children }) {
  return (
    <section id={ sectionId }>
      {
        title && <h1>{ title }</h1>
      }
      { children }
    </section>
  )
}

export default Section
