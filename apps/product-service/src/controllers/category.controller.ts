import { prisma, Prisma } from "@repo/product-database";
import { Request, Response } from "express"

export const createCategory = async (req:Request, res:Response)=>{
    console.log("Checking DB URL:", process.env.DATABASE_URL);
    const data:Prisma.CategoryCreateInput = req.body;


    const category = await prisma.category.create({data})
    res.status(201).json(category);

}
export const updateCategory = async (req:Request, res:Response)=>{}
export const deleteCategory = async (req:Request, res:Response)=>{}
export const getCategories = async (req:Request, res:Response)=>{}
