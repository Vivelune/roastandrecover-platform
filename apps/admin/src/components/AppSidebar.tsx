"use client"

import { Calendar, ChevronDown, ChevronUp, Home, Inbox, MenuSquare, Paperclip, PersonStanding, PhoneCall, Plus, PlusIcon, Projector, Search, Settings, Shirt, ShoppingBasket, ToolCase, User, User2 } from 'lucide-react'
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from './ui/sidebar'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent } from './ui/dropdown-menu'
import { DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import Categories from '../../../client/components/Categories';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import AddOrder from './AddOrder'
import AddUser from './AddUser'
import AddCategory from './AddCategory'
import AddProduct from './AddProduct'

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]





const AppSidebar = () => {
  return (
  <Sidebar collapsible='icon'>
    <SidebarHeader className='py-4'>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/" className='font-semibold uppercase tracking-tight'>Roast&Recover</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarSeparator/>
    <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>
                      24
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            Products
          </SidebarGroupLabel>
          <SidebarGroupAction>
            <PlusIcon/>
            <span className='sr-only'>Add Products</span>
          </SidebarGroupAction>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                
                <Sheet>
                  <SheetTrigger asChild>
                                  <SidebarMenuButton asChild>
                                    <Link  href="/products">
                                    <Shirt />
                                     See All Products
                                     </Link>
                                  </SidebarMenuButton>

                  </SheetTrigger>
                
                
                </Sheet>

              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                
                <Sheet>
                  <SheetTrigger asChild>
                                  <SidebarMenuButton asChild>
                                    <Link  href="#">
                                    <PlusIcon/>
                                      Add Product
                                     </Link>
                                  </SidebarMenuButton>

                  </SheetTrigger>
                  <AddProduct/>
                
                
                </Sheet>
              

              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                
                <Sheet>
                  <SheetTrigger asChild>
                                  <SidebarMenuButton asChild>
                                    <Link  href="/">
                                    <MenuSquare />
                                     Add Categories
                                     </Link>
                                  </SidebarMenuButton>

                  </SheetTrigger>
                
                  <AddCategory/>
                </Sheet>

              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
          

       
 <SidebarGroup>
          <SidebarGroupLabel>
            Users
          </SidebarGroupLabel>
          <SidebarGroupAction>
            <PlusIcon/>
            <span className='sr-only'>Add Users</span>
          </SidebarGroupAction>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                
                <Sheet>
                  <SheetTrigger asChild>
                                  <SidebarMenuButton asChild>
                                    <Link  href="/users">
                                    <User />
                                     See All Users
                                     </Link>
                                  </SidebarMenuButton>

                  </SheetTrigger>
                
                
                </Sheet>

              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                
                <Sheet>
                  <SheetTrigger asChild>
                                  <SidebarMenuButton asChild>
                                    <Link  href="#">
                                    <Plus/>
                                      Add User
                                     </Link>
                                  </SidebarMenuButton>

                  </SheetTrigger>
                  <AddUser/>
                
                </Sheet>
              

              </SidebarMenuButton>
              
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

              
 <SidebarGroup>
          <SidebarGroupLabel>
            Orders / Payments
          </SidebarGroupLabel>
          <SidebarGroupAction>
            <PlusIcon/>
            <span className='sr-only'>Add Orders</span>
          </SidebarGroupAction>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                
                <Sheet>
                  <SheetTrigger asChild>
                                  <SidebarMenuButton asChild>
                                    <Link  href="/payments">
                                    <ShoppingBasket />
                                     See All Transactions
                                     </Link>
                                  </SidebarMenuButton>

                  </SheetTrigger>
                
                
                </Sheet>

              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                
                <Sheet>
                  <SheetTrigger asChild>
                                  <SidebarMenuButton asChild>
                                    <Link  href="/#">
                                    <Plus/>
                                      Add Order
                                     </Link>
                                  </SidebarMenuButton>

                  </SheetTrigger>
                  <AddOrder/>
                
                </Sheet>
              

              </SidebarMenuButton>
              
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>


        {/* NESTED */}
      

         <Collapsible  className='group/collapsible'>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                Help <ChevronDown className='ml-auto transition-transform group-data-[scale=open]/collapsible:rotate-180'/>
                </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
            <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                  <Paperclip/>
                  Documentation
                  </Link>

                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#">
                  <PhoneCall/>
                  Customer Support 
                  </Link>

                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>


    </SidebarContent>
    <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                      <SidebarMenuButton>
                        <User2/> Vivelune <ChevronUp className='ml-auto'/>
                      </SidebarMenuButton>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Setting
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Log out
                    </DropdownMenuItem>
                    
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
  )
}

export default AppSidebar
