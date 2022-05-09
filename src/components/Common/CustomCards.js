import React from "react";
import classnames from "classnames";
import "../styles.scss";

const CustomCards = ({ firstIcon, intent, onClick, clicked }) => {
  return (
    <div
      className={classnames({
        CustomCards,
        CustomCards__Selected: clicked,
      })}
      onClick={onClick}
    >
      <div className="d-flex justify-content-between align-items-center">
        {firstIcon && <i className={firstIcon}></i>}
        <span className={classnames({ "ml-4": firstIcon })}>{intent}</span>
      </div>
      <i className="ri-arrow-right-s-line" style={{ fontSize: "25px" }}></i>
    </div>
  );
};

export default CustomCards;
