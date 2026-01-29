"use client"

import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

const ToDoList = () => {

const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined)
 const [open , setOpen] = useState(false)
  React.useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
  }, [])

  return (
    <div>
    <h1 className='text-lg font-medium mb-6'>Todo List</h1>
      {/* Calender */}
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className='w-full'>
            <CalendarIcon/>
            {date ? format(date, "PPP") : <span> Pick a date </span> }
        </Button>
      </PopoverTrigger>
        <PopoverContent className='w-auto p-0'><Calendar
      mode="single"
      selected={date}
      onSelect={(date)=>{setDate(date); setOpen(false)}}
      timeZone={timeZone}
      className=''
    />
    </PopoverContent>
    </Popover>
      
      <Separator/>

      <ScrollArea className='max-h-100 mt-4 overflow-y-auto'>
        <div className='flex flex-col gap-4'>
            
        <Card className='p-4'>
                <div className='flex items-center gap-4'>
                    <Checkbox id='terms-2' checked/>
                    <Label htmlFor="terms-2" className='text-sm text-muted-foreground'>Build Platform</Label>

                </div>            
        </Card>
        <Card className='p-4'>
    <div className='flex items-center gap-4'>
        <Checkbox id='terms-3' />
        <Label htmlFor="terms-3" className='text-sm text-muted-foreground'>Analytics Dashboard</Label>
    </div>
</Card>

<Card className='p-4'>
    <div className='flex items-center gap-4'>
        <Checkbox id='terms-4'  />
        <Label htmlFor="terms-4" className='text-sm text-muted-foreground'>User Management</Label>
    </div>
</Card>

<Card className='p-4'>
    <div className='flex items-center gap-4'>
        <Checkbox id='terms-5' />
        <Label htmlFor="terms-5" className='text-sm text-muted-foreground'>Content Library</Label>
    </div>
</Card>

<Card className='p-4'>
    <div className='flex items-center gap-4'>
        <Checkbox id='terms-6'  />
        <Label htmlFor="terms-6" className='text-sm text-muted-foreground'>Notification System</Label>
    </div>
</Card>

<Card className='p-4'>
    <div className='flex items-center gap-4'>
        <Checkbox id='terms-7' />
        <Label htmlFor="terms-7" className='text-sm text-muted-foreground'>Payment Gateway</Label>
    </div>
</Card>

<Card className='p-4'>
    <div className='flex items-center gap-4'>
        <Checkbox id='terms-8' checked />
        <Label htmlFor="terms-8" className='text-sm text-muted-foreground'>Security Module</Label>
    </div>
</Card>

<Card className='p-4'>
    <div className='flex items-center gap-4'>
        <Checkbox id='terms-9' />
        <Label htmlFor="terms-9" className='text-sm text-muted-foreground'>API Integration</Label>
    </div>
</Card>

<Card className='p-4'>
    <div className='flex items-center gap-4'>
        <Checkbox id='terms-10' checked />
        <Label htmlFor="terms-10" className='text-sm text-muted-foreground'>Reporting Tools</Label>
    </div>
</Card>

        </div>

      </ScrollArea>
    </div>
  )
}

export default ToDoList
