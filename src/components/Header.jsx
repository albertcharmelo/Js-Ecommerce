import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  
  const openNav = () => {
    document.getElementsByClassName("search__container")[0].style.width = "300px";
  }
  const openCart = () => {
    document.getElementsByClassName("cart__container")[0].style.width = "300px";
  } 

  return (
    <>
      <div className="header flex items-center">
        <div className="header__logo">
          <h1 className="h2">LOGO</h1>
        </div>
        <nav className="header__nav ">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Productos</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="header__options">
          <FontAwesomeIcon icon={faSearch} onClick={openNav} className="c_pointer searchIcon" />
          <FontAwesomeIcon icon={faShoppingCart} onClick={openCart} className="c_pointer" />
        </div>
        
        
      </div>
    </>
  );
};

export default Header;
