import {string, z} from "zod"


export type ProductType = {
  id: string | number
  name: string
  shortDescription: string
  description: string
  price: number
  sizes: string[]
  colors: string[]
  images: Record<string, string>
}





export type ProductsType = ProductType[]


export type CartItemType = ProductType & {
  quantity: number
  selectedSize: string
  selectedColor: string
}

export type CartItemsType = CartItemType[]



export const shippingFormSchema = z.object({
    name:z.string().min(1, "Name is required!"),
    email: z.string().min(1, "Email is required!"),
    phone: z.string().min(7, "Phone number must be between 7 and 10 digits!")
    .max(10, "Phone number must be between 7 and 10 digits!")
    .regex(/^\d+$/, "Phone Number must contain only numbers!"),

    address: z.string().min(1, "Address is required!"),
    city: z.string().min(1, "City is required!"),
    country: z.string().min(1, "Country is required!"),
    
})

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>



export const paymentFormSchema = z.object({
    cardHolder:z.string().min(1, "Card holder's name is required!"),
    cardNumber: z.string().min(1, "Invalid Card Number")
    .max(16, "Invalid Card Number"),
    expirationDate: z.string()
    .regex(/\b(0[1-9]|1[0-2])\/(\d{4})\b/, "Expiration must be MM/YYYY Format "),

    cvv: z.string().min(3, "Invalid CVV, Please check the 3 digits on the back").max(3, "Invalid CVV,  Please check the 3 digits on the back")
    
    
})

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>




export type CartStoreStateType = {
    cart: CartItemsType;
    hasHydrated : boolean;
}


export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void
    removeFromCart: (product: CartItemType) => void
    clearCart: () => void
}