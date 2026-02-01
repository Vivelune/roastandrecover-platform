import { auth } from "@clerk/nextjs/server"

const TestPage = async () => {


    const {getToken} = await auth()
    const token = await getToken()

    const resProduct = await fetch("http://localhost:8000/test", {
        headers:{
            Authorization:`Bearer ${token }`
        }
    })
    const resOrder = await fetch("http://localhost:8001/test", {
        headers:{
            Authorization:`Bearer ${token }`
        }
    })
     const resPayment = await fetch("http://localhost:8002/test", {
        headers:{
            Authorization:`Bearer ${token }`
        }
    })

    const dataPayment =await resPayment.json()
   

    const dataProduct =await resProduct.json()
    const dataOrder =await resOrder.json()

    console.log(dataProduct, "THIS IS PRODUCT SERVICE")

    console.log(dataOrder, "THIS IS ORDER SERVICE")
    console.log(dataPayment, "THIS IS PAYMENT SERVICE")




  return (
    <div>
      Test
    </div>
  )
}

export default TestPage
