"use client"
import { BeanIcon, CoffeeIcon, ShoppingBasketIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const categories = [
    {
        name: "All",
        icon: <ShoppingBasketIcon className='w-4 h-4'/>,
        slug: "all"
    },
    {
        name: "Lumière Tea Set",
        icon: <CoffeeIcon className='w-4 h-4'/>,
        slug: "tea"
    },
    {
        name: "Nomad Coffee Cup",
        icon: <BeanIcon className='w-4 h-4'/>,
        slug: "coffee"
    },
]

const Categories = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const selectedCategory = searchParams.get("category")
    const pathname = usePathname()

    const handleChange = (value : string ) =>{
        const params = new URLSearchParams(searchParams)
        params.set("category", value || "all")
        router.push(`${pathname}?${params.toString()}`, {scroll : false})
    }



  return (
    <div className='grid grid-cols-3 gap-4 bg-gray-800 p-2 rounded-4xl text-sm text-amber-50'>
      {
        categories.map(category=>(
            <div className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-2xl ${category.slug ===selectedCategory ? "bg-amber-50 text-gray-800"
                : null
            }`
            }
            onClick={()=>handleChange(category.slug)}
            key={category.name}>
                    {category.icon}
                    {category.name}
            </div>
        ))
    }
    </div>
  )
}

export default Categories
