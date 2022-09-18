import React from "react";

const ImagePromotional = () => {
  return (
    <div className="container-fluid promotional__box  mt-5 mb-5">
      <div className="d-flex justify-center relative">
        <img
          src="/img/delivery5.jpg"
          className="promotional__container_img"
          alt="Imagen de Promoción de Delivery"
        />

        <div className="absolute promotinal__text">
          <h2 className=" text-center text-white">
            <div className="subtitle">A partir de 10$ en compra de productos</div>  
            Aprovecha nuestro delivery gratis </h2>
            <button className="btn btn-promotional">Click Aqui!</button>
        </div>
      </div>
    </div>
  );
};

export default ImagePromotional;
