import { ShippingFormInputs, shippingFormSchema } from '../lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'




const ShippingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInputs)=>void}) => {

  const {register, handleSubmit, formState:{errors}} = useForm<ShippingFormInputs>({
    resolver : zodResolver(shippingFormSchema)
  })

  const router = useRouter()

  const handleShippingForm:SubmitHandler<ShippingFormInputs> = (data) =>{
    setShippingForm(data)
    router.push("/cart/?step=3", {scroll:false})
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleShippingForm)}>
        <div className='flex flex-col gap-1'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="name">Name</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="text" id='name' placeholder='John Doe' {...register("name")} />
            {errors.name && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.name.message}
              </p>
            )} 
        </div>
        <div className='flex flex-col gap-1'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="email">Email</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="email" id='email' placeholder='johndoe@mail.com' {...register("email")} />
            {errors.email && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.email.message}
              </p>
            )} 
        </div>
        <div className='flex flex-col gap-1'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="phone">Phone Number</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="number" id='phone' placeholder='+180012921' {...register("phone")} />
            {errors.phone && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.phone.message}
              </p>
            )} 
        </div>
        <div className='flex flex-col gap-1'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="address">Street Address</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="text" id='address' placeholder='30N Gould Str St' {...register("address")} />
            {errors.address && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.address.message}
              </p>
            )} 
        </div>
       <div className='flex justify-between gap-10'>
        <div className='flex flex-col gap-1 w-full'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="city">City</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="text" id='city' placeholder='Sheridan' {...register("city")} />
            {errors.city && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.city.message}
              </p>
            )} 
        </div>
        <div className='flex flex-col gap-1 w-full'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="country">Country</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="text" id='country' placeholder='United States' {...register("country")} />
            {errors.country && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.country.message}
              </p>
            )} 
        </div>
       </div>

       <button 
       type='submit'
       className='w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer items-center flex justify-center gap-2 hover:bg-gray-950 transition-all duration-300 ease-in-out'>Continue
                    <ArrowRightIcon className='w-4 h-4'/>
                </button>
    </form>
  )
}

export default ShippingForm
