import React from 'react'
import './../styles/product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'


export const Product = () =>{
  return(
    <>
      <div className="product2__card">
        <div className="product2__image__wrap">
          <a className="product2__image">
            <img src="https://gqwieartbmthzgnxehwj.supabase.co/storage/v1/object/public/shopping/harina_pan.png" className='pop__cart__image' alt="" />         
          </a>
          <div className="product2__option__container">
            <ul>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faSearch} />
                  <span className="ht-product-action-tooltip">Vista Rapida</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="ht-product-action-tooltip">Añadir al carrito</span>
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="ht-product-action-tooltip">Añadir a favoritos</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="product2__content__container">
          <div className="product2__content__inner">
          <h4 className="product2__title h4">
            <a href="#">Harina Pan</a>
          </h4>
          <div className="product2__price__container">
            <span className="old">
              <span className="money" >bsS.25.00</span>
            </span>
            <span className="new">
              <span className="money" >bsS.20.00</span>
            </span>
          </div>

          </div>
        </div>
      </div>
    
    </>
  )
}
export default Product