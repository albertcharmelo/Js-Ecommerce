import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect} from "react-redux";
import { useEffect,useState } from "react";




const mapDispatchToProps = (dispatch) => {
  
  return {
    addCart: (product) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.productCart,
  };
};


const Header = (props) => {
  
  const [Headercart, setHeadercart] = useState([]);

  useEffect(() => {
    setHeadercart(props.cart)
  }, [props]);




  const openNav = () => {
    document.getElementsByClassName("search__container")[0].style.width = "300px";
  }
  const openCart = () => {
    document.getElementsByClassName("cart__container")[0].style.width = "300px";
  } 
  return (
    <>
      <div className="header  items-center">
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
            <div className="search__narvbar__container">
              <FontAwesomeIcon icon={faSearch} onClick={openNav} className="c_pointer searchIcon" />
            </div>
           

            <div className="cart__navbar__container">
              <span className="cart__navbar__icon">
                <FontAwesomeIcon data-count={Headercart} icon={faShoppingCart} onClick={openCart} className="c_pointer" />
              </span>
            </div>
           
          
        </div>
        
        
      </div>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

