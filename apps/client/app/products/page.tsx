import React from 'react'
import ProductList from '../../components/ProductList'

const page = async ({searchParams} : {searchParams:Promise<{category:string}>}) => {

      const category = (await searchParams).category


  return (
    <div>
      <ProductList params='products' category={category}/>
    </div>
  )
}

export default page
