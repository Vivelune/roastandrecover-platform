"use client"
import { ShoppingBagIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import useCartStore from '../stores/cartStores';

const ShoppingCartIcon = () => {

const {cart, hasHydrated} = useCartStore()
const totalItems = cart.reduce( (acc: number, item: { quantity: number }) => acc + item.quantity, 0)

if (!hasHydrated || totalItems === 0) return null


  return (
    <Link href="/cart" className='relative'>
        <ShoppingBagIcon className='w-4 h-4 text-gray-600'/>
        <span className='absolute text-white bg-gray-800 text-xs rounded-full w-4 h-4 items-center flex justify-center -top-2.5 -right-2'>
          {totalItems}
        </span>
    </Link>
  )
}

export default ShoppingCartIcon
