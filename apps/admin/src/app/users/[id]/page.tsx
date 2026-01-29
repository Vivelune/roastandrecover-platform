import AppLineChart from '../../../components/AppLineChart'
import CardList from '../../../components/CardList'
import EditUser from '../../../components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'
import { Badge } from '../../../components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../../components/ui/breadcrumb'
import { Button } from '../../../components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../../components/ui/hover-card'
import { Progress } from '../../../components/ui/progress'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../../components/ui/sheet'
import {  BadgeCheck, Crown, Shield, Sparkles } from 'lucide-react'
import React from 'react'

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Workstation</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Vivelune</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

<div className='flex flex-col mt-4 xl:flex-row gap-8'>
    <div className='w-full xl:w-1/3 space-y-6'>
        {/* LEFT */}
        <div className='bg-primary-foreground p-4 rounded-lg'>
            <h1 className='text-xl font-semibold'>User Badges</h1>
            <div className='flex gap-4 mt-4'>
                <HoverCard>
            <HoverCardTrigger><BadgeCheck size={36} className='rounded-full bg-blue-500 border border-blue-500/2 p-2'/></HoverCardTrigger>
            <HoverCardContent>
                <h1 className='font-bold mb-2'>
                    Verified User
                </h1>
                <p className='text-muted-foreground text-sm'>This user has been verified by the admin</p>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
                <Crown size={36} className='rounded-full bg-yellow-500 border border-yellow-500/20 p-2'/>
            </HoverCardTrigger>
            <HoverCardContent>
                <h1 className='font-bold mb-2'>Premium User</h1>
                <p className='text-muted-foreground text-sm'>This user has a premium subscription</p>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
                <Shield size={36} className='rounded-full bg-green-500 border border-green-500/20 p-2'/>
            </HoverCardTrigger>
            <HoverCardContent>
                <h1 className='font-bold mb-2'>Moderator</h1>
                <p className='text-muted-foreground text-sm'>This user moderates the community</p>
            </HoverCardContent>
            </HoverCard>
            <HoverCard>
            <HoverCardTrigger>
                <Sparkles size={36} className='rounded-full bg-purple-500 border border-purple-500/20 p-2'/>
            </HoverCardTrigger>
            <HoverCardContent>
                <h1 className='font-bold mb-2'>New User</h1>
                <p className='text-muted-foreground text-sm'>This user joined recently</p>
            </HoverCardContent>
            </HoverCard>
            </div>
        </div>


 <div className='bg-primary-foreground p-4 rounded-lg space-y-4'>
            <div className='flex items-center gap-4'>
                <Avatar className='size-12'>
                    <AvatarImage src="https://picsum.photos/200/200?random=7"/>
                    <AvatarFallback>VL</AvatarFallback>
                </Avatar>

                <h1 className='text-xl font-semibold'>
                    Vivelune
                </h1>
            </div>
            <p className='text-sm text-muted-foreground'>
                Vivelune is a passionate software developer with over 5 years of experience in full-stack web development. He enjoys building user-friendly applications, exploring new technologies like React and Node.js, and contributing to open-source projects in his free time. When not coding, John loves hiking, reading sci-fi novels, and experimenting with home brewing.
            </p>

        </div>

         <div className='bg-primary-foreground p-4 rounded-lg'>

            <div className='flex items-center justify-between'>
                
            <h1 className='text-xl font-semibold'>User Information</h1>
            <div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="secondary">
                            Edit User
                        </Button>
                    </SheetTrigger>
                        <EditUser/>
                   </Sheet>
            </div>

            </div>
            <div className='space-y-4 mt-4'>
                <div className='flex flex-col gap-2 mb-8'>
                    <p className='text-sm text-muted-foreground'>
                        Profile Completion
                    </p>
                    <Progress value={66} />


                </div>
                <div className=' flex items-center gap-2'>
                    <span className='font-bold'>Full Name:</span>
                    <span className=''> Vivelune</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-bold'>Email:</span>
                    <span className=''>hello../../..vivelune.com</span>
                </div>
                
                <div className='flex items-center gap-2'>
                    <span className='font-bold'>Phone:</span>
                    <span className=''>+1 800 70986</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-bold'>Street Address:</span>
                    <span className=''>House 1181 Street 50</span>
                </div>

                <div className='flex items-center gap-2'>
                    <span className='font-bold'>City,:</span>
                    <span className=''>San Francisco, CA</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-bold'>Country:</span>
                    <span className=''>United States</span>
                </div>
               
                <p className='text-sm text-muted-foreground'>
                    Joined on 2025.01.01
                </p>    
            </div>
        </div>
       





    </div>

    <div className='w-full xl:w-2/3 space-y-6'>
        {/* RIGHT */}

       
        <div className='bg-primary-foreground p-4 rounded-lg flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>User Activity</h1>
            <AppLineChart/>
        </div>
    </div>
</div>

    </div>
  )
}

export default SingleUserPage