import React from 'react'

import img_1 from '../../assets/webp/chatgpt.webp';
import img_2 from '../../assets/webp/bing.webp';
import img_3 from '../../assets/webp/fiverr.webp';
import img_4 from '../../assets/webp/gmail.webp';
import img_5 from '../../assets/webp/google_docs.webp';
import img_6 from '../../assets/webp/google_sheets.webp';
import img_7 from '../../assets/webp/linkedin.webp';
import img_8 from '../../assets/webp/twitter.webp';
import img_9 from '../../assets/webp/upwork.webp';
import img_10 from '../../assets/webp/youtube.webp';

const images = [
  { id: 1, src: img_1, alt: 'ChatGPT logo' },
  { id: 2, src: img_2, alt: 'Bing logo' },
  { id: 3, src: img_3, alt: 'Fiverr logo' },
  { id: 4, src: img_4, alt: 'Gmail logo' },
  { id: 5, src: img_5, alt: 'Google Docs logo' },
  { id: 6, src: img_6, alt: 'Google Sheets logo' },
  { id: 7, src: img_7, alt: 'LinkedIn logo' },
  { id: 8, src: img_8, alt: 'Twitter logo' },
  { id: 9, src: img_9, alt: 'Upwork logo' },
  { id: 10, src: img_10, alt: 'Youtube logo' },
];

const ImageGallery = () => {

  return (
    <div className='filter grayscale flex items-center flex-wrap justify-between gap-y-4 gap-x-1 xs:gap-x-3 3xs:gap-x-5 4xs:gap-x-7 md:gap-x-9'>
        {
        images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className='w-1/6 md:3/12 max-w-img'
            aria-hidden='true'
            loading='lazy'
          />
        ))
        }
    </div>
  );
};
export default ImageGallery
