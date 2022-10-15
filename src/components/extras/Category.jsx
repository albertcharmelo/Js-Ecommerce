import React from "react";

const Category = ({img,title,mount}) => {
  return (
    <div className="col-12 col-lg-3">
      <div className="category__card">
        <div className="category_img">
          <img src={img} alt={`Categoria de ${title}`} />
        </div>
        <div className="category__title">
          <h4 className="h4 text-center category__title">{title}</h4>
        </div>
        <div className="category__products_mount">
          <p className="text-center">{mount != 1 ? `${mount} produtos` : `${mount} producto`  }</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
