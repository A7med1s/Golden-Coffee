import React from 'react'

const AboutUs = () => {
  return (
    <>
    <section
  className="relative bg-[url(https://img.freepik.com/premium-photo/close-up-dropping-coffee-beans-background_28943-706.jpg?w=740)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-black/80"
  ></div>

  <div
    className="relative h-screen text-center pt-48"
  >
    <p className='text-yellow-500 font-extrabold lg:text-2xl text-xl'>About Us</p>
    <p className='text-white font-bold py-4'>We are a website that sells all kinds of coffee</p>
    <div>
    <p className='text-yellow-300'>We offer the best types of coffee at the lowest prices and <br/> the highest quality according to the opinions of our customers.</p>
    <p className='text-yellow-300'>We introduce the product with love.</p>
    </div>
  </div>
</section>
    </>
  )
}

export default AboutUs
