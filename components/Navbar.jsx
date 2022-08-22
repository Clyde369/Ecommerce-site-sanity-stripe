import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'

import {Cart} from './'
import {useStateContext} from '../context/StateContext'
const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext()
  return (
    <div className="navbar-container">
      <p className="logo text-3xl font-bold underline " >
        <Link href="/">
          E-Commerce Demo
        </Link>
      </p>
      <button type="button" className='bg-gray-100 hover:bg-gray-200 rounded-xl p-2' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="">{totalQuantities}</span>
      </button>
        {showCart && <Cart />}
    </div>
  )
}

export default Navbar