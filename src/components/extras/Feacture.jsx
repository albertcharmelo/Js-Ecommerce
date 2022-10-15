import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Feacture = ({icon,title,description}) => {
  return (
    <>
      <div className="feacture d-flex col-12 col-lg-3">
        <div className="feacture__icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="feacture__title ">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Feacture;
