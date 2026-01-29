import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PaymentFormInputs, paymentFormSchema } from '../lib/types'




const PaymentForm = ({setPaymentForm}:{setPaymentForm:(data:PaymentFormInputs)=>void}) => {

  const {register, handleSubmit, formState:{errors}} = useForm<PaymentFormInputs>({
    resolver : zodResolver(paymentFormSchema)
  })

  const router = useRouter()

  const handlePaymentForm:SubmitHandler<PaymentFormInputs> = (data) =>{
    setPaymentForm(data)
    router.push("/", {scroll:false})
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handlePaymentForm)}>
        <div className='flex flex-col gap-1'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="cardHolder">Card Holder</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="text" id='cardHolder' placeholder='John Doe' {...register("cardHolder")} />
            {errors.cardHolder && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.cardHolder.message}
              </p>
            )} 
        </div>
        <div className='flex flex-col gap-1'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="cardNumber">Card Number</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="email" id='cardNumber' placeholder='4242 4242 4242 4242' {...register("cardNumber")} />
            {errors.cardNumber && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.cardNumber.message}
              </p>
            )} 
        </div>
        <div className='flex flex-col gap-1'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="expirationDate">Expiration Date</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="string" id='expirationDate' placeholder='MM/YYYY' {...register("expirationDate")} />
            {errors.expirationDate && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.expirationDate.message}
              </p>
            )} 
        </div>
        <div className='flex flex-col gap-1'> 
            <label className='text-xs text-gray-500 font-medium' htmlFor="cvv">CVV Number</label>
             <input className='border border-gray-200 py-1 px-2 text-sm rounded-xl' type="number" id='cvv' placeholder='023' {...register("cvv")} />
            {errors.cvv && (
              <p className='text-xs font-semibold text-red-500'>
                {errors.cvv.message}
              </p>
            )} 
        </div>
        <div className='flex items-center'> 
            <Image src='/paymentProviders/klarna.png' alt='klarna' width={50} height={50} className='rounded-md' />
            <Image src="/paymentProviders/visa.png" alt='cards' width={50} height={50} className='rounded-md' />
            <Image src="/paymentProviders/stripe.png" alt='stripe' width={50} height={50} className='rounded-md' />

        </div>
      

       <button 
       type='submit'
       className='w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer items-center flex justify-center gap-2 hover:bg-gray-950 transition-all duration-300 ease-in-out'>Checkout
                    <ShoppingCartIcon className='w-4 h-4'/>
                </button>
    </form>
  )
}

export default PaymentForm
