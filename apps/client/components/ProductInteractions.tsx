"use client"

import { ProductType } from '../lib/types'
import useCartStore from '../stores/cartStores';
import { MinusIcon, PlusIcon, ShoppingCart } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ProductInteractions = ({product, selectedSize, selectedColor} : {product:ProductType; selectedSize: string; selectedColor: string}) => {

    const router =useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const {addToCart} = useCartStore()

    const handleTypeChange = (type: string, value : string)=>{
            const params = new URLSearchParams(searchParams.toString())
            params.set(type,value)
            router.push(`${pathname}?${params.toString()}`,{scroll:false})
    }

    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (type: "increment" | "decrement") =>{
        if (type === "increment"){
            setQuantity(prev=>prev+1)

        }
        else if (quantity > 1){
            setQuantity((prev)=>prev -1)
        }
    }


    const handleAddToCart = () =>{
        addToCart({
            ...product,
            selectedColor,
            selectedSize,
            quantity,
        })
        toast.success("Product Added To Cart!")
    }





  return (
    <div className='flex flex-col gap-4 mt-4'>
        <div className='flex flex-col gap-2 text-sm'>
            <span className='text-gray-500'>Size</span>
            <div className='flex items-center gap-4'>
            {product.sizes.map(size=>(
                <div className={`cursor-pointer bg-gray-100 py-1 px-2 rounded-full text-gray-800
                ${selectedSize === size ? "bg-gray-800 text-white font-semibold" : "bg-gray-100"}
                `} key={size}
                onClick={()=>handleTypeChange("size", size)}
                >
                    
                        {size}
                    
                    
                </div>
            ))}
            </div>
        </div>

        <div className='flex flex-col gap-2 text-sm'>
            <span className='text-gray-500'>Color</span>
            <div className='flex items-center gap-4'>
            {product.colors.map(color=>(
               
                <div className={`${selectedColor === color ? "w-7 h-7 border" : "w-6 h-6"} rounded-full`} key={color}
                style={{backgroundColor: color}}
                onClick={()=>handleTypeChange("color", color)}
                >
                    
                    
                    
                    
                </div>

            ))}
            </div>
            <p className='text-xs  text-gray-500'>
               Selected Color: <span className='uppercase text-gray-800 font-semibold'> {selectedColor}</span>
            </p>
        </div>

        <div className='flex flex-col gap-2 text-sm'>
            <span className='text-gray-500'>Quantity</span>
            <div className='flex gap-4 items-center'>
                <button onClick={()=>handleQuantityChange("decrement")} className='bg-gray-200 rounded-full p-1 group hover:bg-gray-800 transition-all duration-300'>
                    <MinusIcon className='w-4 h-4 text-gray-500 group-hover:text-white transition-all duration-300'/>
                </button>

                <div className='text-gray-800 text-md '>
                    {quantity}
                </div>

                <button onClick={()=>handleQuantityChange("increment")} className='bg-gray-200 rounded-full p-1 group hover:bg-gray-800 transition-all duration-300'>
                    <PlusIcon className='w-4 h-4 text-gray-500 group-hover:text-white transition-all duration-300'/>
                </button>
            </div>
        </div>



        <div className='flex flex-col gap-2'>
            <button 
            onClick={handleAddToCart}
            
            className='border bg-gray-800 text-white text-sm font-medium flex items-center justify-center gap-4 py-2 rounded-lg cursor-pointer hover:bg-gray-950 transition-all duration-300'>
            
                <PlusIcon className='w-4 h-4'/>
                Add To Cart
            </button>

            <button className='border text-gray-800 text-sm font-medium flex items-center justify-center gap-4 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-100'>
                <ShoppingCart className='w-4 h-4'/>
                Buy Now
            </button>
        </div>
      
    </div>


  )
}

export default ProductInteractions
