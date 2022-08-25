import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((s) => s.cart)

  if (amount < 1) {
    return (
      <section className='cart'>
        <h2>your bag</h2>
        <h4 className='empty-cart'>is currently empty</h4>
      </section>
    )
  }
  /* LEFT OFF HERE */

  return <div>CartContainer</div>
}

export default CartContainer
