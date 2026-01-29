"use client"
 
import { cn } from "../../lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"

 import { Checkbox } from "../../components/ui/checkbox"

import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import Link from "next/link";
import Image from "next/image";




export type Product = {
  id: string | number;
  price: number;
  name: string;
  shortDescription: string;
  description: string;
  sizes:string[];
  colors: string[];
  image: Record<string, string>;
};

export const columns: ColumnDef<Product>[] = [
    {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
   {
       accessorKey: "image",
       header: "Image",
       cell: ({row})=>{
         const product = row.original;
             const colorKey = product.colors[0] || Object.keys(product.image)[0] || "";

         return(
           <div className="w-9 h-9 relative">
             <Image src={product.image[colorKey] || "/placeholder.png"} alt={product.name} fill className="rounded-full object-cover"/>
           </div>
         )
       }
     },
  
    {
    accessorKey: "name",
    header: "Name",
  },
  
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const product = row.original
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(product.price)
 
      return <div className="text-right font-medium">{formatted}</div>
    }, 
  },
  {
    accessorKey: "shortDescription",
    header: "Description",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id.toString())}
            >
              Copy Product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/users/${product.id}`}>
                View Product
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>View Product details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]