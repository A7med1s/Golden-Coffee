import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart } from '../rtk/slices/cartslice'
import { addQuantity } from '../rtk/slices/cartslice'
import { removeQuantity } from '../rtk/slices/cartslice'
import {Link} from "react-router-dom"
const Cart = () => {
    const myCart = useSelector((state)=>state.cart)
    const dispatch =useDispatch()
    const price = myCart.reduce((acc,product)=>{
        acc += product.price * product.quantity;
        return acc 
     },0)
  return (
    <>
        <div className='bg-yellow-500'>
        <div className="container cart-comp py-8">
         
        {/* <Link to={"/"}><svg className='cursor-pointer' width="32px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z" fill="#000000"></path> </g></svg></Link> */}
        
    <div class="flex items-center justify-center">
<div class="col-span-12">
    <div >
        <table class="table text-gray-400 border-separate space-y-6 text-sm">
            <thead class="bg-white text-gray-500">
                <tr>
                    <th class="p-3">Product</th>
                    <th class="p-3 text-left">Price</th>
                    <th class="p-3 text-left">Quantity</th>
                    <th class="p-3 text-left"></th>
                </tr>
            </thead>
        
            
            {myCart.map((product)=>{
                return (
               
                    <tr class="bg-black text-white">
                    <td class="p-3">
                        <div class="flex align-items-center">
                            <img class="rounded-full h-12 w-12  object-cover" src={product.img} alt="unsplash"/>
                            <div class="ml-3">
                                <div class="">{product.title}</div>
                            </div>
                        </div>
                    </td>
                    <td class="p-3 font-bold text-centr">
                       $ {product.price}
                    </td>
                    <td class="p-3 font-bold text-center">
                        {product.quantity}
                    </td>
                    <td class="p-3 flex text-yellow-500">
                        <button onClick={()=>{
                            dispatch(removeFromCart(product))
                        }} class="hover:text-gray-100 mr-2">
                            Remove
                        </button>
                        <button onClick={()=>{
                            dispatch(addQuantity(product))
                        }}>+</button>
                        <button onClick={()=>{
                            dispatch(removeQuantity(product))
                        }}>-</button>
                        
                    </td>
                </tr>
                
)
})}
        </table>
    </div>
</div>
</div>
    <div className='text-center'>
        <p className='font-bold'>Totla : ${price}</p>
        <div className='p-4'>
        <Link className='bg-black text-yellow-500 hover:text-white py-2 px-8 font-semibold rounded-full' onClick={()=>{
            window.localStorage.setItem('cart-price',price)
            
        }}
        to={'/pay-page'}>Pay</Link>
        </div>

    </div>
    </div>
        </div>
    </>
  )
}

export default Cart























