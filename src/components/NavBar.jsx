import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
  const mobileMenu =function (){
    document.getElementById("mobile-menu").classList.toggle("hidden")
  }
  return (
    <nav className="bg-black sticky top-0 z-50 border-b-2 border-yellow-500">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button onClick={()=>mobileMenu()} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
       
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="">
          <Link to={"/"}><p className='text-yellow-400 font-extrabold text-xl my-logo cursor-pointer'>Golden Coffee</p></Link>
        </div>
        <div className="hidden sm:ml-6 sm:block ms-auto me-auto">
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-300 hover:bg-yellow-500 hover:text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
            <Link to="/products" className="text-gray-300 hover:bg-yellow-500 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Products</Link>
            <Link to="/about-us" className="text-gray-300 hover:bg-yellow-500 hover:text-black rounded-md px-3 py-2 text-sm font-medium">About Us</Link>
            <Link to="/partnership" className="text-gray-300 hover:bg-yellow-500 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Partnership</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Link to={"/cart"} className="rounded-full p-1 text-yellow-400 hover:text-white focus:outline-none">
          <svg className='cart-svg' width="64px" height="64px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#EAB308"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M8,44h32c2.2,0,4-1.8,4-4l0-26h-8.18C34.863,8.334,29.934,4,24,4S13.137,8.334,12.181,14H4l0,26C4,42.2,5.8,44,8,44z M24,8 c3.719,0,6.845,2.555,7.737,6H16.263C17.155,10.555,20.281,8,24,8z M12,18v4h4v-4h16v4h4v-4h4l0,22L8,40l0-22H12z"></path> </g> </g></svg>
        </Link>

      </div>
    </div>
  </div>

  <div className="sm:hidden hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link onClick={mobileMenu} to="/" className="text-gray-300 hover:text-yellow-400 block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
      <Link onClick={mobileMenu} to="/products" className="text-gray-300 hover:text-yellow-400 block rounded-md px-3 py-2 text-base font-medium">Products</Link>
      <Link onClick={mobileMenu} to="/about-us" className="text-gray-300 hover:text-yellow-400 block rounded-md px-3 py-2 text-base font-medium">About US</Link>
      <Link onClick={mobileMenu} to="/partnership" className="text-gray-300 hover:text-yellow-400 block rounded-md px-3 py-2 text-base font-medium">Partnership</Link>
    </div>
  </div>
</nav>

  )
}

export default NavBar
