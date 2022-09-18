import React from 'react'
import { useRef,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './../styles/productResult.css'
const SearchSlider = ({products}) => {
  const [searchedProducts, setsearchedProducts] = useState([]);
  const closeNav = () => {
    document.getElementsByClassName("search__container")[0].style.width = "0px";
  } 
  const searchInput = useRef('');
  const findProducts = () => {
    const value = searchInput.current.value;
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
    setsearchedProducts(filteredProducts);


  }

  console.log(searchInput.current.value != '');

  return (
    <div className='search__container'>
       <a className="closebtn c_pointer" onClick={closeNav}>&times;</a>
       <div className="search__title p-3">
          <h6 className='h6 mt-3 uppercase'>Busca tu producto </h6>
       </div>
        <hr />
        <div className='mt-2 p-3 search__input__container'>
            <input type="search" ref={searchInput} onKeyUp={findProducts} className='form-control search__input' placeholder='Buscar..' name="search" id="search-input" />
        </div>
        <hr  className='hr__before__input'/>
        <div className="search__results__container">
          <div className="search__results__title  p-3 ">
            <h6 className='h6 mb-0  '>Resultados de la busqueda</h6>
          </div>
          <div className="results mt-5">
            {(searchInput.current.value == '' || searchedProducts.length === 0 ) 
                ?<p className='text-center'>No hay resultados</p> 
                :searchedProducts.map(product => <ProductResult product={product} key={product.id}/>)}
          </div>         
        </div>    

    </div>
  )
}


const ProductResult = ({product}) => {
  return (
    <div className="product__result mb-2">
      <div className="product__result__img">
        <img src={product.product_images[0].url_image} alt="" />
      </div>
      <div className="product__result__info">
        <h6 className='h6 mb-2'>{product.name}</h6>
        <span>{product.price} BsS.</span>
      </div>
    </div>
  )
}


export default SearchSlider