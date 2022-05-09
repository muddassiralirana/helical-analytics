import React from "react";
import { Label, Input, Button } from "reactstrap";
const SetupNewQuery = () => {
  return (
    <div>
      <div className="d-flex flex-column ">
        <input type="text" className="Inputs_feilds" placeholder="Node" />
        <input type="text" className="Inputs_feilds" placeholder="Modality" />
        <input
          type="text"
          className="Inputs_feilds"
          placeholder="Scan Start Date"
        />
        <input
          type="text"
          className="Inputs_feilds"
          placeholder="Scan End Date"
        />
        <a className="mt-2" href="">
          Test Query
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

export default SetupNewQuery;
