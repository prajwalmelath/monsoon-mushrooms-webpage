import React, { useState} from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
const navigation = [
    { name: 'About Us', href: '#aboutUs' },
    { name: 'Our Services', href: '#ourServices' },
    { name: 'Team', href: '#team' },
    { name: 'Contact Us', href: '#contactUs' },
  ]

const Navbar = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
    <nav aria-label="Global" className="flex items-center justify-between">
    <img
          alt=""
          src={logo}
          className="h-14 w-44 py-0 "
        />
        <div className='p-6 lg:px-8'>
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </a>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    </div>
    </div>
  </nav></div>
  )
}

export default Navbar;