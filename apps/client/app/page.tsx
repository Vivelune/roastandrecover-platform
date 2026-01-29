import Image from "next/image";
import ProductList from "../components/ProductList";

export default async function Home ({searchParams} : {searchParams:Promise<{category:string}>}) {
  
  const category = (await searchParams).category
  
  return (


    

    <div>
      <div className="relative aspect-3/1 mb-12 object-cover mt-12">
        <img src="/Hero.JPG" alt="hero image" className="w-full"/>
      </div>
      <ProductList category={category} params="homepage"/>
    </div>
  );
}
