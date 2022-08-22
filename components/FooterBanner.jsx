import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime, smallText, midText, product,buttonText, image, desc}}) => {
  return (
      <div className="max-w-md shadow-lg overflow-hidden max-w-full p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl">
        <div className="font-bold text-2xl lg:font-bold lg:text-4xl md:text-3xl text-white">
        <img 
          src={urlFor(image)}
          className="bg-pink-550 rounded-full shadow-2xl max-w-[200px] md:max-w-sm float-right"
        />
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
          
        </div>
          <div className="font-bold text-2xl lg:font-bold lg:text-4xl md:text-3xl text-white">
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{desc}</p>
            <Link 
              href={`/product/${product}`}>
                <button type="button">{buttonText}</button>
              </Link>
        </div>
      </div>
  )
}

export default FooterBanner