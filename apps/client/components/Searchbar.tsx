import { SearchIcon } from 'lucide-react'
import React from 'react'

const Searchbar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 rounded-xl ring-1 ring-gray-300 px-2 py-1'>
      <SearchIcon className="w-4 h-4 text-gray-500"/>
      <input id='search' placeholder='Search...' className='text-sm outline-none'/>
    </div>
  )
}

export default Searchbar
