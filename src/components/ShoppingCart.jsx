import React from 'react'
import './../styles/productResult.css'

const closeNav = () => {
    document.getElementsByClassName("cart__container")[0].style.width = "0px";
} 
const ShoppingCart = () => {
  return (
    <div className='cart__container'>
        <a className="closebtn c_pointer" onClick={closeNav}>&times;</a>
        <div className="cart__title p-3">
          <h6 className='h6 mt-3 uppercase'>Mi carro de compras </h6>
       </div>
       <hr />
    </div>
  )
}




const product = () => {
    return(
        <>
        
        </>
    )
}

export default ShoppingCart