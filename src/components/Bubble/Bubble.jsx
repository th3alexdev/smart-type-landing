import React from 'react'

function Bubble({ mainText, user, customClass }) {
  return (
    <div className={`flex items-end mb-8 md:mb-0 gap-2 justify-center ${ customClass }`}>
      <img 
        src="./../src/assets/webp/avatar.png"
        alt="" 
        className='w-12 h-max rounded-full order-2 max-h-md'
      />
      <div className='relative'>
        <div className='absolute left-6 top-6 flex flex-col gap-1'>
          <p className='flex gap-2 mb-2 text-lg'>
            { mainText }
            <img 
              src="./../src/assets/webp/face-with-stuck-out-tongue.webp" alt=""
              className='w-7' 
            />
          </p>
          <p className='flex gap-2 text-sm'>
            { user }
            <img 
              src="./../src/assets/webp/camera.webp" alt=""
              className='w-4' 
            />
          </p>
          <p className='flex gap-2 text-sm'>
            { user }
            <img 
              src="./../src/assets/webp/baby_chick.webp" alt=""
              className='w-4' 
            />
          </p>
          <p className='flex gap-2 text-sm'>
            { user }
            <img 
              src="./../src/assets/webp/ghost.webp" alt=""
              className='w-4' 
            />
          </p>
        </div>
        <img 
          src="./../src/assets/webp/bubble.svg"
          alt="" 
          className='h-40'
        />
      </div>
    </div>
  )
}

export default Bubble
