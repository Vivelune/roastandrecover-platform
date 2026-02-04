"use client"
import PaymentForm from '../../components/PaymentForm'
import ShippingForm from '../../components/ShippingForm'
import { CartItemsType, CartItemType, PaymentFormInputs, ShippingFormInputs } from '../../lib/types'
import useCartStore from '../../stores/cartStores'
import { ArrowRightIcon, CoffeeIcon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { toast } from 'react-toastify'


const steps = [
    {
        id:1,
        title:"Shopping Cart"
    },
    {
        id:2,
        title:"Shipping Address"
    },
    {
        id:3,
        title:"Payment Method"
    },
]

// const cartItems:CartItemsType=[
//     {
//         id:1,
        // name:"Lumière Travel Tea Set",
        // shortDescription: "A refined, portable tea ritual — four elegant cups, one compact pouch, endless moments of calm.",
        // description:"Crafted for tea lovers who refuse to compromise on elegance while traveling, the Lumière Travel Tea Set transforms any place into a personal tea sanctuary. Designed with precision and aesthetic harmony, this set includes four beautifully coordinated tea cups, each available in a distinct, premium colorway. Every piece fits seamlessly into a compact, soft-touch pouch, making it perfect for travel, office use, or mindful outdoor moments. Whether you’re sharing tea with friends or enjoying a quiet solo brew, this set delivers a luxurious experience wherever you go. Minimalist. Functional. Timeless.",
        // price: 69,
        // sizes: ["120ml", "150ml", "180ml"],
        // colors : ["Aqua" , "Orange", "White", "Black"],
        // images:{
        //     Aqua: "/AquaTeaset.JPG",
        //     Orange: "/OrangeUltraTeaSet.JPG",
        //     White: "/whiteTeaSetBag.JPG",
        //     Black: "/matteBlackTeaSet.JPG"
        // },
        // quantity:1,
        // selectedSize:"120ml",
        // selectedColor:"Aqua"
//     },
//     {
//         id:2,
//         name:"Nomad Brew Coffee Cup",
//         shortDescription: "Brew. Sip. Move. The ultimate coffee companion for life in motion.",
//         description:"Designed for those who live fast but brew slow, the Nomad Brew Coffee Cup is your all-in-one solution for fresh coffee anytime, anywhere. Whether you’re commuting, traveling, or working remotely, this cup allows you to brew directly inside — no machines, no mess. Its sleek silhouette and premium finish deliver both performance and style, while the insulated structure helps maintain optimal temperature. Compact, elegant, and functional, this cup is made for modern coffee lovers who demand convenience without sacrificing quality.",
//         price: 55,
//         sizes: ["300ml", "350ml", "450ml"],
//         colors : ["Orange" , "Black"],
//         images:{
//             Orange: "/brewCoffeeBag.JPG",
//             Black: "/matteCoffeeSet.JPG",
    
//         },
//         quantity:3,
//         selectedSize:"300ml",
//         selectedColor:"Orange"
        
//     }
// ]

const page = () => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const activeStep = parseInt(searchParams.get("step") || "1")
    const [shippingForm, setShippingForm] =useState<ShippingFormInputs>()
    const [paymentForm, setPaymentForm] = useState<PaymentFormInputs>()


    const {cart, removeFromCart } = useCartStore();

    const alertDeleteItem = () =>{
        toast.success("Item removed")
    }

    const subtotal = cart.reduce(
  (acc: number, item: CartItemType) => acc + item.price * item.quantity,
  0
)

const discountRate = 0.10
const discount = subtotal * discountRate

const shippingFee = 10

const total = subtotal - discount + shippingFee

  return (
    <div className='flex flex-col gap-8 items-center justify-center mt-12'>
      <h1 className='text-2xl font-semibold'>Your Brewing Cart</h1>
      <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
            {steps.map(step=>(
                <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800": "border-gray-300"}`} key={step.id}>
                    <div className={` w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800": "bg-gray-300"}`}>
                        {step.id}
                    </div>
                    <p className={`text-sm font-regular ${step.id === activeStep ? "text-gray-800": "text-gray-400"}`}>
                        {step.title}
                    </p>

                </div>
            ))}
      </div>




        <div className='w-full flex flex-col lg:flex-row gap-16'>
            <div className={cart.length === 0 ? "w-full lg:w-7/12 shadow-lg border border-gray-200 p-8 rounded-lg  flex flex-col items-center justify-center gap-8" :"w-full lg:w-7/12 shadow-lg border border-gray-200 p-8 rounded-lg flex flex-col gap-8"}>
                {activeStep === 1 ? 
            <>
                {cart.length === 0  ? (
                     <Link href="/products">
                    <button
                    className=' flex gap-4 items-center text-white bg-gray-800 hover:bg-gray-900 duration-300 transition-all px-4 py-2 rounded-lg uppercase text-sm '>
                       
                        <CoffeeIcon className='w-4 h-4'/>
                        Continue Shopping
                    </button>
                        </Link>

                ) : 
                    (cart.map((item: CartItemType)=>(
                        // Single Cart Item
                        
                        <div className='items-center flex justify-between' key={item.id + item.selectedColor + item.selectedColor}>
                            <div className='flex gap-8'>
                                <div className='relative w-32 h-32 bg-gray-50 rounded-lg'>
                                    <Image src={item.images[item.selectedColor] ?? "/placeholder.png"} alt={item.name} fill className='object-contain'/>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <div className=' text-gray-800 gap-1 flex flex-col'>
                                        <p className='text-md font-semibold tracking-tight'>{item.name}</p>
                                        <p className='text-sm font-medium text-gray-500'>Quantity:{" "} {item.quantity}</p>
                                        <p className='text-sm font-medium text-gray-500'>Size:{" "} {item.selectedSize}</p>
                                        <p className='text-sm font-medium text-gray-500'>Color:{" "} {item.selectedColor}</p>
                                    </div>
                                    <p className='font-medium text-gray-800'>
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            <button 
                            onClick={()=>{
                                removeFromCart(item);
                                alertDeleteItem()
                            } }
                            className='w-8 h-8 p-2 rounded-full bg-red-100 flex text-red-400 items-center justify-center cursor-pointer hover:bg-red-200 transition-all duration-300'>
                                <Trash2Icon className=''/>
                            </button>
                        </div>
                    )))
                }
                    </>
                    : activeStep === 2 ? 
                    <ShippingForm setShippingForm={setShippingForm}/> : 
                    activeStep === 3 && shippingForm ? <PaymentForm setPaymentForm={setPaymentForm}/> : <p className='text-sm text-gray-400 font-medium'> *Please fill in the shipping form to continue</p>
                }
            </div>


            
            


            <div className='w-full lg:w-5/12 shadow-lg border border-gray-200 p-8 rounded-lg flex flex-col gap-8 h-max'>
                <h2 className='font-semibold'>Cart Details</h2>
                <div className='flex flex-col gap-4'>
                    <div className='flex text-sm justify-between'>
                        <p className=' text-gray-500'>Subtotal</p>
                        <p className='font-medium'>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className='flex text-sm justify-between'>
                        <p className=' text-gray-500'>Discount (10%)</p>
                        <p className='font-medium'>${discount.toFixed(2)}</p>
                    </div>
                    <div className='flex text-sm justify-between'>
                        <div className='gap-1 flex flex-col mb-4 '>
                             <p className=' text-gray-500 '>Shipping Fee</p>
                             <p className=' text-gray-600 text-xs font-light absolute mt-5  '>
                            <Typewriter
                            words={["Free Shipping Over $100"]}
                            loop
                            
                            cursorStyle="|"
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={1200}

                            />
                            </p>
                        </div>
                       
                        <p className='font-medium'>{subtotal > 100 ? "$0" : "$10"}</p>
                    </div>
                    <hr  className='text-gray-300'/>
                    <div className='flex justify-between'>
                        <p className=' text-gray-800 font-semibold'>Total </p>
                        <p className='font-bold text'>
                                ${total.toFixed(2)}
                        </p>
                    </div>


                </div>{
                    cart.length > 0 && (
                        <>
                { activeStep ===1 && <button
                onClick={()=> router.push("/cart?step=2", {scroll : false})}
                className='w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer items-center flex justify-center gap-2 hover:bg-gray-950 transition-all duration-300 ease-in-out'>Continue
                    <ArrowRightIcon className='w-4 h-4'/>
                </button>}
                </>
                )
                
                }
            </div>
        </div>
    </div>
  )
}

export default page
