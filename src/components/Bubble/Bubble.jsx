import React from 'react'

import avatarImg from './../../assets/webp/avatar.png'
import stuckOutTongueEmoji from './../../assets/webp/face-with-stuck-out-tongue.webp'
import cameraEmoji from './../../assets/webp/camera.webp'
import babyChickEmoji from './../../assets/webp/baby_chick.webp'
import ghostEmoji from './../../assets/webp/ghost.webp'
import bubbleSvg from './../../assets/webp/bubble.svg'

function Bubble({ mainText, user, customClass }) {
  return (
    <div className={`flex items-end mb-8 md:mb-0 gap-2 justify-center ${ customClass }`}
      role='group' aria-label='Bubble'
    >
      <img 
        src={ avatarImg }
        alt='User Avatar'
        className='w-12 h-max rounded-full order-2 max-h-md'
        aria-hidden='true'
      />
      <div className='relative'>
        <div className='mess-container absolute left-6 top-6 flex-col gap-1'>
          <p className='flex gap-2 mb-2 text-lg'>
            { mainText }
            <img 
              src={ stuckOutTongueEmoji } alt='sticking out tongue face emoji'
              className='w-7' 
              aria-hidden='true'
            />
          </p>
          <p className='flex gap-2 text-sm'>
            { user }
            <img 
              src={ cameraEmoji } alt='camera emoji'
              className='w-4'
              aria-hidden='true'
            />
          </p>
          <p className='flex gap-2 text-sm'>
            { user }
            <img 
              src={ babyChickEmoji } alt='baby_chick emoji'
              className='w-4' 
              aria-hidden='true'
            />
          </p>
          <p className='flex gap-2 text-sm'>
            { user }
            <img 
              src={ ghostEmoji } alt='ghost emoji'
              className='w-4' 
              aria-hidden='true'
            />
          </p>
        </div>
        <img 
          src={ bubbleSvg }
          alt='white dialog bubble' 
          className='h-40'
          aria-hidden='true'
        />
      </div>
    </div>
  )
}

export default Bubble
