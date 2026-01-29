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
  category: z.string()
    .min(3, "Category must be at least 3 characters")
    .max(50, "Category must be less than 50 characters"),
  });

const AddCategory = () => {
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  })


  return (
    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                        <SheetTitle>Add Category</SheetTitle>
                        <SheetDescription asChild>
                           <Form {...form}>
                                <form className='space-y-8'>
                                    <FormField control={form.control} name='category' render={({field})=>(
                                    <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Coffee" {...field} />
                                    </FormControl>
                                    <FormDescription>Please enter category above.</FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                    )}/>

                                

                                        <Button type="submit">Submit</Button>

                                </form>
                           </Form>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
  )
}

export default AddCategory
