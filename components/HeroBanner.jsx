import React from 'react'
import Link from 'next/link'
import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="max-w-md shadow-lg overflow-hidden max-w-full p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl">
      <div>
        <p className="font-bold text-5xl p-5 text-center bg-clip-text lg:font-bold lg:text-7xl md:text-6xl bg-black text-transparent bg-gradient-to-r from-pink-600 to-violet-600">{heroBanner.smallText}</p>
        <h3 className="font-bold text-3xl lg:font-bold lg:text-7xl md:text-6xl text-white/100">{heroBanner.midText}</h3>
        <h1 className="font-bold text-3xl text-white/75 font-family lg:font-bold lg:text-7xl md:text-6xl">{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt=""
          className="bg-pink-550 rounded-full shadow-2xl max-w-[200px] md:max-w-sm float-right"
        />
        <div>
          <div className="">
            <h5 className="font-bold text-3xl lg:font-bold lg:text-7xl md:text-6xl text-white/50">Description:</h5>
            <p className="font-bold text-2xl lg:font-bold lg:text-7xl md:text-6xl text-white/25">{ heroBanner.desc }</p>
          </div>
          <div className="p-2">
            <Link href={`/product/${heroBanner.product}`}>
              <button type="button" className="font-bold text-2xl text-white shadow-2xl border rounded-full hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-3">{heroBanner.buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner