import React from 'react'
import logo from '../assets/logo1.png'

export const Contact = () => {
  return (
    <div>
    <div className='pt-5'>
    <h2 className=" flex text-3xl font-bold tracking-tight justify-center p-2 text-gray-300 sm:text-4xl">
      Contact Us</h2>
      <div className='flex flex-col p-2'>
      <img
          alt=""
          src={logo}
          className="h-52 w-80  "
        />
            <h2 className='text-gray-300 pl-24  font-semibold'>Punnad, Kannur <br/>9895912836, 8921390344</h2>
            </div>
    </div>
    <p className='p-6 mt-10'>© 2024 Monsoon Mushrooms, Inc. All rights reserved.</p>
    </div>
  )
}
