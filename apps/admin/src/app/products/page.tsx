import React from 'react'
import { columns, Product } from "./columns"
import { DataTable } from "./data-table"
import { nanoid } from 'nanoid';

const getData = async (): Promise<Product[]> => {
  // Simulate an async operation (e.g., API cal
  
  return [
   {
           id:nanoid(),
           name:"Lumière Travel Tea Set",
           shortDescription: "A refined, portable tea ritual — four elegant cups, one compact pouch, endless moments of calm.",
           description:"Crafted for tea lovers who refuse to compromise on elegance while traveling, the Lumière Travel Tea Set transforms any place into a personal tea sanctuary. Designed with precision and aesthetic harmony, this set includes four beautifully coordinated tea cups, each available in a distinct, premium colorway. Every piece fits seamlessly into a compact, soft-touch pouch, making it perfect for travel, office use, or mindful outdoor moments. Whether you’re sharing tea with friends or enjoying a quiet solo brew, this set delivers a luxurious experience wherever you go. Minimalist. Functional. Timeless.",
           price: 69,
           sizes: ["120ml", "150ml", "180ml"],
           colors : ["Aqua" , "Orange", "White", "Black"],
           image:{
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
           image:{
               Orange: "/brewCoffeeBag.JPG",
               Black: "/matteCoffeeSet.JPG",
       
           }
           
       }
  ];
};


const ProductsPage = async () => {

    const data = await getData()

  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
            <h1 className='font-semibold'>All Products</h1>
      </div>
       <DataTable columns={columns} data={data} />
    </div>
  )
}

export default ProductsPage
