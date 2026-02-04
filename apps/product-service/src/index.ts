import "dotenv/config";
import dotenv from "dotenv";
import path from "path";
import express, {NextFunction, Request, Response} from "express"
import cors from "cors"
import { clerkMiddleware, getAuth } from '@clerk/express'
import { shouldBeUser } from "./middleware/authMiddleware.js"
import productRouter from "./routes/product.route.js"
import categoryRouter from "./routes/category.route.js"


dotenv.config({ path: path.resolve(process.cwd(), ".env") });

console.log("Checking DB URL:", process.env.DATABASE_URL);

const app = express()

app.use(cors({
    origin:["http://localhost:3002" , "http://localhost:3003"], credentials:true
}))

app.use(express.json())
app.use(clerkMiddleware())


app.get("/health", (req:Request,res: Response)=>{
   return res.status(200).json(
    {
      status:"ok",
      uptime:process.uptime(),
      timestamp:Date.now()
    }
)})


app.get("/test", shouldBeUser, (req:Request,res:Response)=>{
    
      res.json(
    {message : "Product Service Authenticated",
         userId:req.userId }
)})

app.use("/products", productRouter)

app.use("/categories", categoryRouter)

app.use((err:any, req:Request, res:Response, next: NextFunction)=>{
    console.log(err);
    return res.status(err.status || 500).json({message:err.message ||"Internal Server Error!"})
})

app.listen(8000, ()=>{  
    console.log("Port running in 8000 on Product Service")
})

