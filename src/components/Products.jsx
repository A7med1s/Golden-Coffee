import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addToCart } from '../rtk/slices/cartslice'
const Products = () => {
    const products = useSelector((state)=>state.product)
    const dispatch = useDispatch()
  return (
  <>
    <div className='bg-black pb-6 border-b-2 borde-white'>
    <p className='text-yellow-500 font-bold text-2xl text-center py-12'>Products</p>
    <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1'>
    {products.map((product)=>{
  return(
    <>
    <div class="max-w-2xl mx-auto" key={product.id}>
	<div class="bg-black max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<div>
			<img class="rounded-t-lg p-8 w-full h-96" src={product.img} alt=""/>
        </div>
			<div class="px-5 pb-5">
        <p className='text-yellow-500 font-bold text-xl text-center'>{product.title}</p>
					<p class="text-gray-400 font-semibold text-xl tracking-tight h-24">{product.desc}</p>
			
				<div class="flex items-center justify-between mt-4 mb-0">
					<span class="text-xl font-bold text-white">${product.price}</span>
					<button onClick={()=>{
            dispatch(addToCart(product));
          }} href="/"
						class="text-black bg-yellow-500 hover:bg-yellow-300 f font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add To Cart</button>
				</div>
			</div>
	</div>
</div> 
    </>
  )
})}
    </div>
    </div>
  </>
  )
}
export default Products





















