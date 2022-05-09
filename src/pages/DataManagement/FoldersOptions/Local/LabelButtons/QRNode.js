import React, { useState } from "react";
import { Button, Input, Label, FormGroup, Col, Row } from "reactstrap";

const QRNode = () => {
  const [uploadMrnClicked, setUploadMrnClicked] = useState(false);
  const [textAreaText, setTextAreaText] = useState("");
  const textareachange = (e) => {
    setTextAreaText(e.target.value);
  };

  return (
    <Col>
      <FormGroup row>
        <Label htmlFor="example-date-input" className="col-md-4 col-form-label">
          Date of Birth:
        </Label>
        <Col md={6}>
          <Input
            className="form-control"
            type="date"
            defaultValue="yyyy-mm-dd"
            id="example-date-input"
          />
        </Col>
      </FormGroup>
      <div className="mt-2"></div>
      <FormGroup row>
        <Label className="col-md-4 col-form-label">Date:</Label>
        <Col md={6}>
          <Input
            className="form-control"
            type="date"
            defaultValue="yyyy-mm-dd"
            id="example-date-input"
          />
        </Col>
      </FormGroup>
      <div className="mt-2"></div>
      <FormGroup row>
        <Label className="col-md-4 col-form-label">Select Modality:</Label>
        <Col md={6}>
          <select className="form-control">
            <option>Select</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label className="col-md-4 col-form-label">Enter MRN:</Label>
        <Col md={6}>
          <Input className="form-control" type="text" placeholder="Enter MRN" />
        </Col>
      </FormGroup>
      <div className="mt-2"></div>
      <FormGroup row>
        <Label className="col-md-4 col-form-label">Enter Name:</Label>
        <Col md={6}>
          <Input
            className="form-control"
            type="text"
            placeholder="Last Name, First Name"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label className="col-md-4">Upload MRN List</Label>
        <Input
          type="checkbox"
          onClick={() => setUploadMrnClicked((value) => !value)}
        />
        <Col md={6}>
          {uploadMrnClicked && (
            <Input
              className="form-control"
              type="textarea"
              id="textarea"
              onChange={textareachange}
              maxLength="225"
              rows="3"
              placeholder="Enter or Copy Multiple Entries separate by ',' or ';'"
            />
          )}
        </Col>
      </FormGroup>
      <Row>
        {uploadMrnClicked && (
          <>
            <Button color="info" className="mt-2 ml-2">
              Upload MRN List
            </Button>
          </>
        )}
        <Button color="info" className="mt-2 ml-2 arrow-btns">
          Run <i className="ri-arrow-right-line"></i>
        </Button>
      </Row>
    </Col>
  );
};

export default QRNode;
