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






 const formSchema = z.object({
  fullName: z.string()
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name must be less than 50 characters"),
  email: z.string()
    .email("Invalid email address"),
  phone: z.string()
    .regex(/^\+?\d{1,3}?[-.\s]?\$?\d{1,4}\$?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Invalid phone number"),
  
  streetAddress: z.string()
    .min(1, "Street Address is required")
    .max(100, "Street Address is too long"),
    city: z.string()
    .min(1, "City is required")
    .max(100, "City is too long"),
  joined: z.string()
    .min(1, "Join date is required")
    .max(50, "Join date is too long"),
country: z.string()
    .min(1, "Country is required")
    .max(100, "Country is too long"),
});

const AddUser = () => {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  })


  return (
    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                        <SheetTitle>Add User</SheetTitle>
                        <SheetDescription asChild>
                           <Form {...form}>
                                <form className='space-y-8'>
                                    <FormField control={form.control} name='fullName' render={({field})=>(
                                    <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>This is your full name.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                    )}/>

                                    <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john.doe@example.com" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter a valid email address.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    

                                    <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+1-123-456-7890" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter a valid phone number. (optional)</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="streetAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Street Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="House XYZ, street ..." {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the user's street address.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input placeholder="New York" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the user's city.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                     <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input placeholder="United States" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the user's country.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="joined"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Join Date</FormLabel>
                                        <FormControl>
                                            <Input placeholder="2023-01-01" {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the date the user joined.</FormDescription>
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

export default AddUser
