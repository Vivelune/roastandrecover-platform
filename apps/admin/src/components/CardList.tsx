
import { nanoid } from 'nanoid'


import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image';
import { Badge } from './ui/badge';
import { ProductsType } from '../../../client/lib/types';

const popularProducts: ProductsType = [
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



const latestTransactions =[
  {
    id: "txn_001",
    title: "Order Payment",
    badge: "Michael Johnson",
    avatar: "https://picsum.photos/200/200?random=1",
    count: 1300
  },
  {
    id: "txn_002",
    title: "Order Payment",
    badge: "Sarah Williams",
    avatar: "https://picsum.photos/200/200?random=2",
    count: 2450
  },
  {
    id: "txn_003",
    title: "Order Payment",
    badge: "David Lee",
    avatar: "https://picsum.photos/200/200?random=3",
    count: 890
  },
  {
    id: "txn_004",
    title: "Order Payment",
    badge: "Emily Chen",
    avatar: "https://picsum.photos/200/200?random=4",
    count: 3200
  },
  {
    id: "txn_005",
    title: "Order Payment",
    badge: "James Rodriguez",
    avatar: "https://picsum.photos/200/200?random=5",
    count: 1750
  },
  
]





const CardList = ({title}:{title:string}) => {




  return (
    <div className=''>
      <h1 className='text-lg font-medium mb-6'>{title}</h1>
      <div className='flex flex-col gap-2'>
        {
           title === "Popular Products" ?  popularProducts.map(item=>(
                <Card key={item.id} className='flex flex-row items-center justify-between gap-4 p-4 '>
                    <div className='w-12 h-12 rounded-sm relative overflow-hidden'>
                        <Image src={Object.values(item.images)[0] || ""} alt={item.name} fill className='object-cover'/>
                    </div>
               
                <CardContent className='p-0 gap-2 flex-1 flex-col items-start'>
                    <CardTitle className='text-sm font-medium'>{item.name}</CardTitle>
                </CardContent>
                <CardFooter className='p-0 '>
                    ${item.price}
                </CardFooter>
                </Card>
            )) :(
              latestTransactions.map(item=>(
                <Card key={item.id} className='flex flex-row items-center justify-between gap-4 p-4 '>
                    <div className='w-12 h-12 rounded-sm relative overflow-hidden'>
                        <Image src={item.avatar} alt={item.title} fill className='object-cover'/>
                    </div>
               
                <CardContent className='p-0 gap-2 flex-1 flex-col items-start'>
                    <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
                    <Badge className='' variant="secondary">{item.badge}</Badge>
                </CardContent>
                <CardFooter className='p-0 '>
                    {item.count/1000}K
                </CardFooter>
                </Card>
            )
            ))
        }
      </div>
    </div>
  )
}

export default CardList
