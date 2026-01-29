"use client"
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { ProductType } from '../lib/types'
import useCartStore from '../stores/cartStores'

const ProductCard = ({product}: {product: ProductType}) => {


 const [productTypes, setProductTypes] = useState<{
  color: string
  size: string
}>({
  color: product.colors[0] ?? "White", // fallback just in case
  size: product.sizes[0] ?? "120ml"
})



  const {addToCart} = useCartStore()

  const handleAddToCart = () =>{
    addToCart({
      ...product,
      quantity:1,
      selectedColor: productTypes.color,
      selectedSize: productTypes.size
    })

    toast.success("Product Added To Your Brewing Cart!")
  }

  const handleProductType = ({type, value}:{type:"size" | "color" , value:string})=>{
    setProductTypes((prev)=>({
      ...prev,
      [type]: value
    }))
  }

  return (
    <div className='shadow-lg flex rounded-lg flex-col w-full  '>
        <Link href={`/products/${product.id}`} className='w-full bg-red-500 h-100 overflow-hidden '>
        <div className='relative w-full h-full  '>
            <Image src={product.images[productTypes.color] ?? "/placeholder.png"} alt={product.name} fill className=' w-full h-full object-cover hover:scale-105 duration-300 ease-in-out'/>
        </div>
        </Link>
        <div className='flex flex-col gap-4 p-4'>
          <h1 className='font-bold'>{product.name}</h1>
          <p className='text-sm text-gray-500'> 
            {product.shortDescription}
          </p>
          <div className='flex items-center gap-4 text-xs'>
              <div className='flex flex-col gap-2'>
                <span className='text-gray-500'>Size</span>
                  <select onChange={e=>handleProductType({type:"size" , value: e.target.value})} name="size" id="size" className='ring-gray-300 rounded-md px-2 py-1'>
                    {product.sizes.map(size=>(
                      <option key={size} value={size}>
                        {size.toUpperCase()}
                      </option>
                    ))}
                  </select>
              </div>
              <div className='flex flex-col gap-1'>
                 <span className='text-gray-500'>Color</span>
                 <div className='flex items-center gap-2  px-2 py-2 rounded-full'>
                       {product.colors.map(color=>(
                        <div className={`cursor-pointer border rounded-full p-0.5 ${productTypes.color === color ? "border-red-400" : "border-gray-300"}`} key={color} onClick={()=>handleProductType({type:"color" , value:color})}>
                          <div className='w-3.5 h-3.5 rounded-full border border-gray-300' style={{backgroundColor: color}}>
                            
                          </div>
                        </div>
                       ))}
                 </div>
              </div>
          </div>

          <div className='flex items-center justify-between'>
                      <p className='font-medium'>
                        ${product.price.toFixed(2)}
                      </p>
                      <button
                      onClick={handleAddToCart}
                      className='flex bg-white-50 border duration-300 ease-in-out cursor-pointer hover:bg-gray-800 border-gray-800 px-4 py-2 rounded-full gap-3 items-center 
                      group'>
                        <ShoppingCartIcon className='w-4 h-4 text-gray-800 group-hover:text-amber-50'/>
                            <span className='text-sm text-gray-800 font-semibold group-hover:text-amber-50'>Add to Cart</span>
                      </button>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
