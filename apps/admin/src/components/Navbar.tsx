"use client"
import { LogOutIcon, Moon, MoonIcon, SettingsIcon, SquareMenu, Sun, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { SidebarTrigger } from './ui/sidebar'

const Navbar = () => {


    const {theme , setTheme} = useTheme()


  return(
    <nav className='p-4 flex items-center justify-between top-0 bg-background sticky z-10'>
      {/* collapse button */}
      <SidebarTrigger/>
    <div className='flex items-center gap-4'>
        <Link href='/'>
            Workstation
        </Link>

        {/* Theme Menu */}
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        
        <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
            <AvatarImage/>
            <AvatarFallback/>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <UserIcon className='w-[1.2rem] h-[1.2rem] mr-2'/> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className='w-[1.2rem] h-[1.2rem] mr-2'/> Settings
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                    <LogOutIcon className='w-[1.2rem] h-[1.2rem] mr-2'/> Logout
                </DropdownMenuItem>
                
            </DropdownMenuContent>

        </DropdownMenu>



        



    </div>
    </nav>
  )
}

export default Navbar
