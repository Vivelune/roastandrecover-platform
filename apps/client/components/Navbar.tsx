import Link from 'next/link'
import React from 'react'
import Searchbar from './Searchbar'
import { BellIcon, HomeIcon, ShoppingBag } from 'lucide-react'
import ShoppingCartIcon from './ShoppingCartIcon'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import ProfileButton from './ProfileButton'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between border-b border-gray-200'>

      {/* left   */}
     <Link  href="/" className=' text-xl md:text-4xl font-semibold text-gray-800 tracking-tighter '>
     Roast&Recover
     <p className='text-sm md:text-2xl text-gray-500 font-light '>
      Brew. Sip. Recover.
     </p>
     </Link>


      {/* right */}
      <div className='flex items-center gap-6'>
        <Searchbar/>
        <BellIcon className='w-4 h-4 text-gray-600'/>
          <ShoppingCartIcon/>
        <Link href="/" className='py-2 px-2 rounded-2xl font-semibold   hover:bg-gray-100 duration-400 ease-in-out'>
          <HomeIcon className='w-4 h-4 text-gray-600 '/> 
        </Link>
          
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              
            </SignedOut>
            <SignedIn>
              <ProfileButton/>
            </SignedIn>
          </header>
      </div>
        
    </div>
  )
}

export default Navbar
