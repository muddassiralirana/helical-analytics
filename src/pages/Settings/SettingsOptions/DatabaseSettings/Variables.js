import React from "react";
import { FormGroup, Label, Col } from "reactstrap";

const Variables = () => {
  return (
    <div>
      <FormGroup row>
        <Label className="col-md-2 col-form-label">
          Select Database Tables Columns:
        </Label>
        <Col md={3}>
          <select className="form-control">
            <option>Select</option>
            <option>id</option>
            <option>gender</option>
            <option>age</option>
            <option>dob</option>
            <option>mrn</option>
          </select>
        </Col>
        <Label className="col-md-2 col-form-label">
          Select Data Tables Types:
        </Label>
        <Col md={3}>
          <select className="form-control">
            <option>Select</option>
            <option>String</option>
            <option>Numeric</option>
            <option>Date</option>
            <option>Time (hrs)</option>
            <option>Time (min)</option>
          </select>
        </Col>
      </FormGroup>
    </div>
  );
};

export default Variables;
