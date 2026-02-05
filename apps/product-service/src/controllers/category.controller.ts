import { prisma, Prisma } from "@repo/product-database";
import { Request, Response } from "express"

export const createCategory = async (req:Request, res:Response)=>{
    const data:Prisma.CategoryCreateInput = req.body;


    const category = await prisma.category.create({data})
    res.status(201).json(category);

}
export const updateCategory = async (req:Request, res:Response)=>{
    try {
        const {id} = req.params
        const data : Prisma.CategoryUpdateInput = req.body

        const updatedCategory = await prisma.category.update({
            where:{id: Number(id)},
                data,

        })
            return res.status(200).json({
                message:"Category Successfully Updated!",
                updatedCategory
            })


    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}





export const deleteCategory = async (req:Request, res:Response)=>{
    try {
        const {id} = req.params

        const deletedCategory = await prisma.category.delete({
            where:{
                id: Number(id)
            }
        })
        return res.status(200).json({
            message:"Category has been deleted!"
        })
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const getCategories = async (req:Request, res:Response)=>{
     try {
        // Fetch all categories from the database
        const categories = await prisma.category.findMany();
        res.status(200).json({
            message: "Categories fetched successfully",
            categories,
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
