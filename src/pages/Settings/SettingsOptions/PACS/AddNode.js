import React from "react";
import Toggler from "../../../../components/Toggler/Toggler";
import { Label, Input, Button } from "reactstrap";
const AddNode = () => {
  return (
    <div>
      <div className="d-flex flex-column">
        <input type="text" className="Inputs_feilds" placeholder="Name" />
        <input type="text" className="Inputs_feilds" placeholder="IP" />
        <input type="text" className="Inputs_feilds" placeholder="Port" />
        <input type="text" className="Inputs_feilds" placeholder="Calling AE" />
        <input type="text" className="Inputs_feilds" placeholder="Calling AE" />
        <Toggler label="SSL/TLS" width="200px" />
        <a className="mt-2" href="">
          Test Connection
        </a>
        <Button
          className="mt-2"
          style={{ width: "20%", backgroundColor: "#0075be" }}
        >
          save
        </Button>
      </div>
    </div>
  );
};

export default AddNode;
