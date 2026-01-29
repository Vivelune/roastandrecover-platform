import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-0 md:justify-between bg-gray-800 p-8 rounded-lg'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link  href="/" className=' text-white text-xl md:text-4xl font-black tracking-tighter '>
          Roast&Recover
          <p className='text-sm md:text-2xl text-gray-200 font-light '>
            Brew. Sip. Recover.
          </p>
        </Link>
        <p className='text-xs md:text-md text-gray-400 font-medium'>
          &#9400; {new Date().getFullYear()} Roast&Recover
        </p>
        <p className='text-xs md:text-md text-gray-400 font-medium'>
          All rights reserved
        </p>
      </div>
      <div className='flex flex-col gap-4 text-xs md:text-md text-gray-400 items-center md:items-start '> 
          <p className='text-sm md:text-md font-semibold text-amber-50 '>
              Links
          </p>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">Homepage</Link>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">Contact</Link>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">Terms of Service</Link>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">Privacy Policy</Link>
      </div>
      <div className='flex flex-col gap-4 text-xs md:text-md text-gray-400 items-center md:items-start '> 
          <p className='text-sm md:text-md font-semibold text-amber-50 '>
              Links
          </p>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">All Products</Link>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">New Arrivals</Link>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">Best Sellers</Link>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">Sale</Link>
      </div>
      <div className='flex flex-col gap-4 text-xs md:text-md text-gray-400 items-center md:items-start  '> 
          <p className='text-sm md:text-md font-semibold text-amber-50 '>
              Links
          </p>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">About</Link>
          <Link className="hover:text-amber-50 duration-300 ease-in-out" href="/">FAQ</Link>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">Customer Service</Link>
          <Link className='hover:text-amber-50 duration-300 ease-in-out' href="/">Shipping Policy</Link>
      </div>
    </div>
  )
}

export default Footer
