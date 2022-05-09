import React, { useState } from "react";
import Toggle from "react-toggle";
import "./Toggler.css";

const Toggler = ({ label,width="400px" }) => {
  const [value, setValue] = useState(false);

  return (
    <div className="d-flex justify-content-between" style={{ width: width }}>
      <label htmlFor="status" className="mr-3">
        {label}
      </label>
      <Toggle
        id="status"
        defaultChecked={value}
        onChange={(prev) => setValue(!prev)}
      />
    </div>
  );
};

export default Toggler;
