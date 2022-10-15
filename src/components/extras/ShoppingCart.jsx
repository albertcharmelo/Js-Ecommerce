import React,{ useEffect,useState,useRef,memo } from 'react'
import { connect} from "react-redux";
import './../../styles/productResult.css'




const closeNav = () => {
  document.getElementsByClassName("cart__container")[0].style.width = "0px";
} 

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    addCart: (product) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    },
    increaseQuantity: (product) => {
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: product,
      });
    },
    decreaseQuantity: (product) => {
      dispatch({
        type: "DECREASE_QUANTITY",
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




const ShoppingCart = (props) => {
  
    const [productCart, setProductCart] = useState([])
    const refContainer = useRef(null);     
    

    useEffect(() => {
        setProductCart(props.cart)
        
    }, [props.cart]);


    const increaseQuantity = (product) => {
       
        props.increaseQuantity(product)
        
    }

    const decreaseQuantity = (product) => {
        props.decreaseQuantity(product)
    }



  return (
    <div className='cart__container'>
        <a className="closebtn c_pointer" onClick={closeNav}>&times;</a>
        <div className="cart__title p-3">
          <h6 className='h6 mt-3 uppercase'>Mi carro de compras </h6>
       </div>
       
       <hr />
       <div className="row pr-3">
            <div className="col-12 card__item__container" ref={refContainer} id='cart_container'>
               {productCart.map((e) => {
                    return <Product 
                    key={e.id} 
                    product = {e}
                    increaseQuantity={ increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                   />
               })}
            </div>
       </div>
    </div>
  )
}




const Product = memo((props) => {
  console.log(`renderizando ${props.product.name}`)
  const handleQuantity = (product) => {
      props.increaseQuantity(product)
      
  }
    return(
        <>
          <div className="row mt-5 mb-5">
            <div className="col-6">
              <img className='cart__item__image' src={props.product.product_images[0].url_image} alt="" />
            </div>
            <div className="col-6">
              <p className="h6">{props.product.name}</p>
              <p className="h6">BsS.{props.product.price}</p>
              <div className="flex justify-between w-28 align-content-center border-solid border-2 border-black">
                <button className="btn btn__quantity " onClick={()=>handleQuantity(props.product)}>-</button>
                <p className="h6 pt-2 ">{props.product.quantity}</p>
                <button className="btn btn__quantity" onClick={ () =>handleQuantity(props.product)} >+</button>

              </div>
            </div>
          </div>
        </>
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

