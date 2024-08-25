import React from 'react'
import { Card } from '../components/Card'
import mushroomProduction from '../assets/mushroomProduction.png'
import mushroomSpawn from '../assets/mushroomSpawn.png'
import pellet from '../assets/pellet.png'
import trainingClass from '../assets/trainingClass.png'
import mushroomPickle from '../assets/mushroomPickle.png'

const services = [
  {
   'title' : 'Mushroom production',
   'subText' : 'We specialize in the cultivation of high-quality mushrooms, using advanced techniques to ensure optimal growth and yield.',
   'image' : mushroomProduction,
   'alt': 'mushroom production'
  },
  {
    'title' : 'Mushroom Spawn',
    'subText' : 'Our process involves creating premium mushroom spawn, which serves as the foundation for a successful and healthy mushroom crop.',
    'image' : mushroomSpawn,
    'alt': 'mushroom spawn'
  },
  {
    'title' : 'Mushroom Pellet',
    'subText' : 'We produce nutrient-rich mushroom pellets, designed to enhance growth by providing an ideal substrate for mushroom cultivation.',
    'image' : pellet,
    'alt': 'mushroom pellet'
  },
  {
    'title' : 'Pickle Production',
    'subText' : 'We craft flavorful mushroom pickles, preserving the fresh taste of mushrooms with our unique brining and seasoning process.',
    'image' : mushroomPickle,
    'alt': 'mushroom pickle production'
  },
  {
    'title' : 'Training Classes',
    'subText' : 'Join our expert-led training classes to gain practical knowledge and hands-on experience in every aspect of mushroom cultivation and processing.',
    'image' : trainingClass,
    'alt': 'training classes'
  }
]
export const OurServices = () => {
  return (
    <div className='pt-5'>
    <h2 className=" flex text-3xl font-bold tracking-tight justify-center p-2 text-gray-900 sm:text-4xl">
      Our Services</h2>
      <div className='flex flex-col m-10 pb-10 sm:flex-row'>
      {services.map((service) => (
      <Card title={service.title} subtext={service.subText} image={service.image} alt={service.alt} ></Card>
      ))}
      </div>
      </div>)
}
