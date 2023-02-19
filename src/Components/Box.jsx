import React from "react";

const Box = (props) => {
  const className = `boxContainer ${props.clicked ? "boxClicked" : ""}`;
  return (
    <div className={className} onClick={() => props.handleClick(props.id)}>
      <p className="boxValue">{props.value}</p>
    </div>
  );
};

export default Box;
