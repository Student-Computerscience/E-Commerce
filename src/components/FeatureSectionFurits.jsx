import React from 'react'
import ProductCart from './ProductCart '


const data =[
  {
    id:0,
    img:"public/images/product__1.webp",
    name:"Dried Mango",
    price:"$500"
  },
  {
    id:1,
    img:"public/images/product__2.webp",
    name:"Crunchy Crisps",
    price:"$300"
  },
  {
    id:3,
    img:"public/images/product__3.webp",
    name:"Jewel ranberries",
    price:"$200"
  },
  {
    id:4,
    img:"public/images/product__4.webp",
    name:"JAlmond organic",
    price:"$100"
  },
  
]

const FeatureSectionFurits = () => {
  return (
    <div className='container pt-16'>
      <div className='lg:flex justify-between items-center'>
        <div>
          <h3 className='font-medium text-2xl'>Fruits & Vegetables</h3>
          <p className='text-gray-600 mt-2'>Buy from fresh fruits and vegetables online at the best price</p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits </button>
          <button className='text-gray-600 hover:text-accent'> Vegetables</button>
          <button className='text-gray-600 hover:text-accent'>Bread and Bakery</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className='w-full h-full object-cover' src="public/images/feature__1.webp" alt="banner" />
        </div>

        {data.map((el) => (<ProductCart 
        key={el.id} 
        img={el.img} 
        name={el.name} 
        price={el.price}/>
        ))}
      </div>
      
    </div>
  )
}

export default FeatureSectionFurits
