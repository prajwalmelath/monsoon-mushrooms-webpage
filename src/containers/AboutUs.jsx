import React from 'react'

export const AboutUs = () => {
  return (
    <div className='mt-5'>
    <h2 className=" flex text-3xl font-bold tracking-tight justify-center pt-4 text-gray-900 sm:text-4xl">About Us</h2>
    <div className="flex flex-col items-center sm:flex-row p-4 sm:items-center sm:p-16">
      <p className='font-light text-xl p-2 sm:p-6 sm:w-6/12'>We are an agri-tech startup incubated at Mi Zone under the Kerala Startup Mission (KSUM). Our focus is on the cultivation, processing, and distribution of various types of mushrooms and seeds. As one of the leading suppliers in Kerala, we specialize in mushrooms and their byproducts, including soup powder and pickles. Our product range is available to customers and dealers across Kerala.</p>
      <div className="p-4 sm:py-6 sm:w-1/2 ">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/hBhKD6g8IOA?si=A3tuoJjU9SATBbsJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
      </div>
  )
}
