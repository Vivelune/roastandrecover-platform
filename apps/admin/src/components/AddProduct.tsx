"use client"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../components/ui/sheet'

import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';


const categories = ["Tea", "Coffee"] as const;

const sizes = ["120ml", "150ml", "180ml", "300ml", "350ml", "450ml"] as const;

const colors = ["Orange", "Black", "White"] as const;



 const formSchema = z.object({
  productName: z.string()
    .min(2, "Product Name must be at least 2 characters")
    .max(50, "Product Name must be less than 50 characters"),
  shortDescription: z.string()
    .min(10, "Short Description must be at least 10 characters")
    .max(200, "Short Description must be less than 200 characters"),
  description: z.string()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description must be less than 1000 characters"),
  price: z.string()
    .min(1, "Price is required")
    .max(10, "Price is too long")
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid price format (e.g., 10.99)"),
  category: z.enum(categories),
  sizes: z.array(z.enum(sizes)).min(1, "At least one size must be selected"),
  colors: z.array(z.enum(colors)).min(1, "At least one color must be selected"),
  images: z.record(z.enum(colors), z.string().url("Invalid image URL")),
});

const AddProduct = () => {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  })


  return (
    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                        <SheetTitle>Add Product</SheetTitle>
                        <SheetDescription asChild>
                           <Form {...form}>
                                <form className='space-y-8'>
                                    <FormField control={form.control} name='productName' render={({field})=>(
                                    <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Tea Brewer" {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the name of the product  </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                    )}/>

                                    <FormField
                                    control={form.control}
                                    name="shortDescription"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Short Description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter a short description" {...field} />
                                        </FormControl>
                                        <FormDescription>A brief summary of the product.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    

                                    <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Detailed description</FormLabel>
                                        <FormControl>
                                             <Textarea placeholder="Enter detailed description" {...field} />
                                        </FormControl>
                                        <FormDescription>Detailed description of the product.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Price</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., 10.99" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the price in dollars (e.g., 10.99).</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        </FormControl>
                                         <SelectContent>
                                            {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                            ))}
                                        </SelectContent>
                                        </Select>
                                        <FormDescription>Select the product category.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                     <FormField
                                    control={form.control}
                                    name="sizes"
                                    render={({ field }) => (
                                        <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Sizes</FormLabel>
                  <FormDescription>Select at least one size.</FormDescription>
                </div>
                <div className='grid grid-cols-3 gap-4 my-2'>
                    
                
                    {sizes.map((size) => (
                            <div className='gap-2 flex items-center' key={size}>
                                <Checkbox id='size'checked={field.value?.includes(size)} onCheckedChange={(checked)=>{
                                    const currentValues = field.value || [];
                                    if(checked){
                                        field.onChange([...currentValues, size ]);
                                    }else{
                                        field.onChange(currentValues.filter((v)=> v !==size))
                                    }
                                }}/>
                                <label htmlFor='size' className='text-sm'>{size}</label>
                            </div>
                            ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                                    )}
                                    />
<FormField
                                    control={form.control}
                                    name="colors"
                                    render={({ field }) => (
                                        <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Colors</FormLabel>
                  <FormDescription>Select at least one color.</FormDescription>
                </div>
                <div className='space-y-4'>
                <div className='grid grid-cols-3 gap-4 my-2'>
                    {colors.map((color) => (
                            <div className='gap-2 flex items-center' key={color}>
                                <Checkbox id='size'checked={field.value?.includes(color)} onCheckedChange={(checked)=>{
                                    const currentValues = field.value || [];
                                    if(checked){
                                        field.onChange([...currentValues, color ]);
                                    }else{
                                        field.onChange(currentValues.filter((v)=> v !==color))
                                    }
                                }}/>
                                <label htmlFor='color' className='text-sm flex items-center gap-2'>
                                    <div className='w-2 h-2 rounded-full ' style={{backgroundColor: color}}/>
                                    {color}</label>
                            </div>
                            ))}
                            </div>
                            {field.value && field.value.length > 0 && (
                                <div className='mt-8 space-y-4'>
                                    <p className='text-sm font-medium'> Upload Images for selected colors:</p>
                                    {field.value.map(color=>(
                                        <div className='flex items-center gap-2' key={color}>
                                             <div className='w-2 h-2 rounded-full ' style={{backgroundColor: color}}/>
                                                <span className='text-xs uppercase min-w-15 font-semibold'>
                                                    {color}
                                                    </span>
                                                    <Input type="file" accept="image/*"/>
                                        </div>
                                    ))}
                                </div>
                            )}

                </div>
                            <FormMessage />
                        </FormItem>
                                    )}
                                    />

                                        <Button type="submit">Submit</Button>

                                </form>
                           </Form>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
  )
}

export default AddProduct
