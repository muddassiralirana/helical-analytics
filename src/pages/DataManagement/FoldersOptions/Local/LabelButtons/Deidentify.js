import React from "react";
import { FormGroup, Label, Input, Col, Button } from "reactstrap";

const Deidentify = () => {
  return (
    <>
      <Col>
        <FormGroup row>
          <Label className="col-md-2 col-form-label">Select Profile:</Label>
          <Col md={3}>
            <select className="form-control">
              <option>Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </Col>
        </FormGroup>
        <FormGroup check>
          <div className="d-flex flex-column mt-3">
            <Label check>
              <Input type="radio" name="radio1" />
              De-identify all incoming scans
            </Label>
            <Label check>
              <Input type="radio" name="radio1" />
              De-identify Current Folder Now
            </Label>
            <Label check>
              <Input type="radio" name="radio1" />
              No - Action - All incoming scans
            </Label>
            <Label check>
              <Input type="radio" name="radio1" />
              De-Identify Selected
            </Label>
          </div>
        </FormGroup>
        <Button color="info" className="mt-3" size="lg">
          Save
        </Button>
      </Col>
    </>
  );
};

export default Deidentify;
