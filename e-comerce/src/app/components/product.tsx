import React from 'react'
import { ProductType } from '@/types/ProductType'

 type Productprops={
    product: ProductType
}

export default function Product({product}: Productprops) {
  return (
    <div className='flex flex-col shadow-lg h-96 bg-slate-800 p-5'>
        <div className='relative max-h-72 flex-1'>IMG</div>
        <div className='flex justify-between font-bold my-3'>{product.title}</div>
        <button className='rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center'>Adicionar ao carrinho</button>
   
    </div>
  )
}
