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
  amount: z.string()
    .min(1, "Price is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Invalid price format (e.g., 10.99)"),
  
  userId: z.string()
    .min(1, "User ID is required")
    .max(50, "User ID must be less than 50 characters"),
  
  status: z.enum(["pending", "processing", "success", "failed"],
  ),
});

const AddOrder = () => {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  })


  return (
    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                        <SheetTitle>Add Order</SheetTitle>
                        <SheetDescription asChild>
                           <Form {...form}>
                                <form className='space-y-8'>
                                    <FormField control={form.control} name='amount' render={({field})=>(
                                    <FormItem>
                                    <FormLabel>Amount</FormLabel>
                                    <FormControl>
                                        <Input  {...field} />
                                    </FormControl>
                                    <FormDescription>Enter the amount of the order</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                    )}/>

                                    <FormField
                                    control={form.control}
                                    name="userId"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>User ID</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>Enter the User ID.</FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                   <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a status" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="processing">Processing</SelectItem>
                                            <SelectItem value="failed">Failed</SelectItem>
                                            <SelectItem value="success">Success</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>Select the order status</FormDescription>
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

export default AddOrder
