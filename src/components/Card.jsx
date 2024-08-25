import React from 'react'

export const Card = (props) => {
    const { title, image, subtext, alt}  = props;
  return (
    <div className='flex flex-col content-center border-gray-300 border-2 m-2 rounded-md self-center w-72 sm:w-full sm:self-auto'>
      <img src={image} alt={alt} className='w-30 h-36'>
      </img>
    <h2 className='text-lg font-semibold flex justify-center p-2'>{title}</h2>
      <p className='text-md font-extralight flex justify-center p-2'>{subtext}</p>
      </div>

  )
}
