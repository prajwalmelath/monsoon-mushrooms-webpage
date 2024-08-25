import React from 'react'
import rahul from '../assets/rahul.png'
const people = [
{
    name: 'Rahul Govind',
    role: 'Co-Founder / CEO',
    image: rahul
  },
]

export const Team = () => {
  return (
    <div className='mt-5'>
      <div className="flex flex-col items-center ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
        <p className="text-xl font-light p-5 flex text-gray-900 sm:text-2xl"> We’re a dynamic group of individuals who are passionate about what we do.</p>
      </div>
      <div className='flex justify-center sm:12 sm:p-10'>
      {people.map((person) => (
      <li key={person.name} className='flex self-center'>
      <div className="flex px-8 py-8">
      <div className="flex flex-col content-center sm:flex-row sm: justify-center sm:items-center sm:w-full  ">
        <img src={person.image} alt='' className='rounded-full flex justify-center w-72 h-72 border-black '>
        </img>
        <div className="flex flex-col self-center pt-2 sm:p-10">
        <h2 className='text-2xl font-semibold'>{person.name}</h2>
        <h2 className='text-xl font-light'>{person.role}</h2>
        </div>
      </div>
      </div>
      </li>
   ))}
       </div>
    </div>
  )
}
