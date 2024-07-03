import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
  <>

<section
  className="relative bg-[url(https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.webp)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-black/80  "
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
        Let us find your

        <strong className="block font-extrabold text-yellow-600">
        Favorite Coffee.
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 xl:pl-48 flex flex-wrap gap-4 text-center">
        <Link to={"/products"} className="block w-full rounded bg-yellow-600 px-12 py-3 text-sm font-medium hover:bg-yellow-500 text-black shadow hover:text-rose-700 focus:outline-none focus:ring sm:w-auto">
          Order Now !
        </Link>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Landing
