import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const Product = ({ product: { image, name, slug, price, details } }) => {
  
  return (
    <div>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg md:max-w-5xl">
          <div class="md:flex">
            <div class="md:shrink-0">
            <Link href={`/product/${slug.current}`}>
              <img 
                src={urlFor(image && image[0])}
                class="h-48 w-full object-cover md:h-[150px] md:w-[250px] cursor-pointer"
              />
            </Link>
            </div>
            <div class="p-3">
              <div class="uppercase text-sm text-indigo-500 font-semibold"></div>
              <h1 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer text-2xl">{name}</h1>
              <h3 class="mt-2 text-2xl text-underline text-slate-500">R{price}</h3>
              <p class="mt-3 text-slate-500 overflow-auto h-[100px]">{details}</p>
              {/* buttons */}
          <div class="text-center ">
            <button type="button" class="bg-green-500 m-1 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full">View</button>
            <button type="button" class="bg-red-500 m-1 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full">Add to cart</button>
          </div>
          
          {/* buttons */}
            </div>
          </div>

        </div>
    </div>
  )
}

export default Product