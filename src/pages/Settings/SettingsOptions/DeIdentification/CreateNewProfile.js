import React from "react";
import { Input, Label, Col, FormGroup, Button } from "reactstrap";

const CreateNewProfile = () => {
  return (
    <>
      <FormGroup row>
        <Label className="col-md-4 col-form-label">Enter Profile Name:</Label>
        <Col md={6}>
          <Input className="form-control" type="text" placeholder="filename" />
        </Col>
      </FormGroup>
      <Button
        className="mt-2 Buttons_profile"
        style={{
          width: "20%",
          backgroundColor: "#0075be",
          marginRight: "20px",
        }}
      >
        Save
      </Button>
    </>
  );
};

export default CreateNewProfile;
