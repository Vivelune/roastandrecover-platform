import { ProductsType } from '../lib/types'
import React from 'react'
import Categories from './Categories'
import ProductCard from './ProductCard'
import Link from 'next/link'
import { LucideCoffee } from 'lucide-react'
import Filter from './Filter'
import { nanoid } from 'nanoid'

const products: ProductsType = [
    {
        id:nanoid(),
        name:"Lumière Travel Tea Set",
        shortDescription: "A refined, portable tea ritual — four elegant cups, one compact pouch, endless moments of calm.",
        description:"Crafted for tea lovers who refuse to compromise on elegance while traveling, the Lumière Travel Tea Set transforms any place into a personal tea sanctuary. Designed with precision and aesthetic harmony, this set includes four beautifully coordinated tea cups, each available in a distinct, premium colorway. Every piece fits seamlessly into a compact, soft-touch pouch, making it perfect for travel, office use, or mindful outdoor moments. Whether you’re sharing tea with friends or enjoying a quiet solo brew, this set delivers a luxurious experience wherever you go. Minimalist. Functional. Timeless.",
        price: 69,
        sizes: ["120ml", "150ml", "180ml"],
        colors : ["Aqua" , "Orange", "White", "Black"],
        images:{
            Aqua: "/AquaTeaset.JPG",
            Orange: "/OrangeUltraTeaSet.JPG",
            White: "/whiteTeaSetBag.JPG",
            Black: "/matteBlackTeaSet.JPG"
        }
    },
    {
        id:nanoid(),
        name:"Nomad Brew Coffee Cup",
        shortDescription: "Brew. Sip. Move. The ultimate coffee companion for life in motion.",
        description:"Designed for those who live fast but brew slow, the Nomad Brew Coffee Cup is your all-in-one solution for fresh coffee anytime, anywhere. Whether you’re commuting, traveling, or working remotely, this cup allows you to brew directly inside — no machines, no mess. Its sleek silhouette and premium finish deliver both performance and style, while the insulated structure helps maintain optimal temperature. Compact, elegant, and functional, this cup is made for modern coffee lovers who demand convenience without sacrificing quality.",
        price: 55,
        sizes: ["300ml", "350ml", "450ml"],
        colors : ["Orange" , "Black"],
        images:{
            Orange: "/brewCoffeeBag.JPG",
            Black: "/matteCoffeeSet.JPG",
    
        }
        
    }
]


const ProductList = ({category, params}:{category: string, params: "homepage" | "products"}) => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <Categories/>

      {params === "products" ? (<Filter/>):null}
      <div className='md:flex lg:flex-row flex flex-col gap-4 '>
            {products.map(product=>(
                <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <Link href={category ? `/products?category=${category}` : "/products" } className='flex justify-end items-center gap-4 group  ' >
      
        <LucideCoffee className='w-4 h-4 text-gray-800 group-hover:scale-150 duration-500 '/>
        
            <span className='text-md font-medium text-gray-500 group-hover:text-gray-800'>
              
            Brew Deeper
            </span>
      </Link>
    </div>
  )
}

export default ProductList
