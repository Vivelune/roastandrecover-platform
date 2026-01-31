import express, {Request, Response} from "express"
import cors from "cors"
import { clerkMiddleware, getAuth } from '@clerk/express'

const app = express()

app.use(cors({
    origin:["http://localhost:3002" , "http://localhost:3003"], credentials:true
}))


app.use(clerkMiddleware())


app.get("/health", (req:Request,res: Response)=>{
   return res.status(200).json(
    {
      status:"ok",
      uptime:process.uptime(),
      timestamp:Date.now()
    }
)})


app.get("/test", (req:Request,res:Response)=>{
     const auth = getAuth(req)
     console.log(auth)
     const userId = auth.userId
     if(!userId){
        return res.status(401).json({
            message:"You are not logged in."
        })
     }
      res.json(
    {message : "Product Service Authenticated"}
)})

app.listen(8000, ()=>{
    console.log("Port running in 8000 on Product Service")
})

