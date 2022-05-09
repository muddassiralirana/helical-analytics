import React from "react";
import { FormGroup, Label, Input, Col, Button } from "reactstrap";

const PushDownload = () => {
  return (
    <>
      <Col>
        <FormGroup row>
          <Label className="col-md-2 col-form-label">Select Destination:</Label>
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
              Select All
            </Label>
            <Label check>
              <Input type="radio" name="radio1" />
              Select Multiple
            </Label>
          </div>
        </FormGroup>
        <Button color="info" className="mt-3 ml-2">
          Push
        </Button>
        <Button color="info" className="mt-3 ml-2">
          Download
        </Button>
      </Col>
    </>
  );
};

export default PushDownload;
