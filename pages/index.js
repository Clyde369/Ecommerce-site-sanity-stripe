import React from 'react'
import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({products, bannerData}) => {
  return (
    <div>
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p className="font-bold">PLEASE NOTE</p>
  <p>THIS APP IS UNDERGOING UPDATES TO TAILWIND, ANYTHING OUT OF THE ORDINARY PLEASE REPORT</p>
</div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h1 className='text-4xl lg:text-7xl md:text-5xl p-4'>Best selling products</h1>
        <h4 className='text-2xl lg:text-3xl md:text-3xl p-4'>Speakers of many creations</h4>
      </div>
      <div className="products-container">
        {products?.map(
          (product => <Product key={product._id} product={product}/>)
        )}
      </div>
      
      <FooterBanner  footerBanner={bannerData && bannerData[0]}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']"
  const products = await client.fetch(query)

  const bannerQuery = "*[_type == 'banner']"
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {products, bannerData}
  }
}

export default Home