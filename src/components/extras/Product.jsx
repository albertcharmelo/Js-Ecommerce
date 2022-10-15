import React from 'react'
import './../../styles/product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux';
import Notiflix from 'notiflix';

import {useState} from 'react'
import ModalProduct from './ModalProduct';







export const Product = ({product}) =>{
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const handleAddCart = (e,Newproduct) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TO_CART',
      payload: Newproduct
    })
    Notiflix.Notify.success('El producto ha sido agregado al carrito', {
      position: 'right-bottom',
      timeout: 1500,
      cssAnimationStyle: 'from-right',
      useIcon: true,
      useGoogleFont: true,
      fontFamily: 'Roboto',
      fontSize: '16px',
      cssAnimationDuration: 400,
      cssAnimationReverse: false,
      cssAnimationIn: 'fadeIn',
      cssAnimationOut: 'fadeOut',
      cssAnimationRepeat: 1,
      cssAnimationDelay: 0,
      cssAnimationSpeed: 400,
      cssAnimationEasing: 'ease',
      cssAnimationSequence: 'normal',
      
    });
  }

  function openModal(e){
    e.preventDefault()
    setModal(true)
  }




  return(
    <>
    
      <div className="product2__card">
        <div className="product2__image__wrap">
          <a className="product2__image">
            <img src={product.product_images[0].url_image} className='pop__cart__image' alt={`Imagen del producto ${product.name}`} />         
          </a>
          <div className="product2__option__container">
            <ul>
              <li>
                <a href="#" onClick={(e)=>openModal(e)}>
                  <FontAwesomeIcon   icon={faSearch} />
                  <ModalProduct isOpen={modal} setIsOpen={setModal}/>
                  <span className="ht-product-action-tooltip">Vista Rapida</span>
                </a>
              </li>
              <li>
                <a onClick={(e) => handleAddCart(e,product)} >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="ht-product-action-tooltip" >Agregar al carrito</span>
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
            <a href="#">{product.name}</a>
          </h4>
          <div className="product2__price__container">
            {
              product.old_price ?  <span className="old">
              <span className="money" >bsS. {product.old_price}</span>
            </span> : ''
            }
           
            <span className="new">
              <span className="money" >bsS. {product.price.toFixed(2)}</span>
            </span>
          </div>

          </div>
        </div>
      </div>
    
    </>
  )
}


          











export default Product