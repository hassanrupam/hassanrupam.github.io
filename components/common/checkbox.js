import React from "react";

const Checkbox = props => {
  const handleCheck = () => {
    if(!props.disabled){
      props.onCheck(!props.check);
    }
  };

  return (
    <div className="Checkbox">
      <div
        className={`Checkbox-box ${props.check && "Checkbox-box-active"}`}
        onClick={handleCheck}
      >
        <div className="Checkbox-tick">{props.check && <p>✓</p>}</div>
      </div>
      <div className="Checkbox-label">
        <p>{props.label}</p>
      </div>
    </div>
  );
};

export default Checkbox;
