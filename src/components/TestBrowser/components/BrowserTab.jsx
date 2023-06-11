import React from 'react'

function BrowserTab({ isSelected, text, imgPath, customClass, onClick }) {
  return (
    <div 
      className={`div-tab w-11 sm:w-max sm:pr-16 ${isSelected ? 'bg-white' : ''}`}
      onClick={ (e) => { onClick(e) }}
      role='rab'
      aria-selected={ isSelected }
      tabIndex={ isSelected ? 0 : -1 }
    >
        <img src={ imgPath } className={`${customClass ? customClass : 'w-4 h-4' }`} alt='' />
        <p className='text-xs hidden sm:block'>{ text }</p>
    </div>
  )
}

export default BrowserTab
