import ProductInteractions from '../../../components/ProductInteractions'
import { ProductType } from '../../../lib/types'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'

const product : ProductType = {
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
        
}



export const generateMetadata =  async ({params}:{params:{id:string}}) =>{
    // TODO: get the product from the database
    // TEMPORARY

    return {
        title: product.name,
        description: product.description
    }
}






const page = async ({params , searchParams}:{params : Promise<[id:string]>; searchParams: Promise<{color:string; size: string}>}) => {

const {size, color } = await searchParams

const selectedSize = (size || product.sizes[0] as string)
const selectedColor = (color || product.colors[0] as string)



  return (
    <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-12 items-center'>
        <div className='w-full lg:w-5/12 relative aspect-2/3 '>
            <Image src={product.images[selectedColor]?? "/placeholder.png"} alt={product.name} 
            className='object-contain rounded-md' fill/>
        </div>
        <div className='w-full lg:w-7/12 flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-gray-800'>
                {product.name}
            </h1>
            <p className='text-gray-500 text-sm'>
                {product.description}
            </p>
            <h2 className='text-2xl font-semibold'>
                ${product.price.toFixed(2)}
            </h2>
            <ProductInteractions product={product} selectedSize={selectedSize} selectedColor={selectedColor}/>

            <div className='flex items-center gap-2 mt-4'>
                <Image src='/paymentProviders/klarna.png' alt='klarna' width={50} height={50} className='rounded-md' />
                <Image src="/paymentProviders/visa.png" alt='cards' width={50} height={50} className='rounded-md' />
                <Image src="/paymentProviders/stripe.png" alt='stripe' width={50} height={50} className='rounded-md' />
                
            </div>
            <p className='text-gray-500  text-xs'>
                By clicking Pay Now, you agree to our {" "}
            
            <span className='underline hover:text-black'>Terms & Conditions</span>{" "}
            and <span className=' underline hover:text-black'> Privary Policy</span>
            . You authorise us to charge your selected payment method for the total amount shown.
            All sales are subject to our return and {" "} <span className='hover:text-black underline'> Refund Policies</span>.
            </p>
        </div>
    </div>
  )
}

export default page
