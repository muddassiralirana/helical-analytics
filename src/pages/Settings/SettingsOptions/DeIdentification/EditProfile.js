import React from "react";
import { Button, FormGroup, Label, Col, Input } from "reactstrap";
import Toggler from "../../../../components/Toggler/Toggler";

const EditProfile = () => {
  return (
    <div>
      <div className="d-flex flex-column">
        <FormGroup row>
          <Label className="col-md-4 col-form-label">Enter Profile Name:</Label>
          <Col md={6}>
            <Input
              className="form-control"
              type="text"
              placeholder="profile name"
            />
          </Col>
        </FormGroup>
        <Toggler label="Patient Identifiers" />
        <Toggler label="Point of Service Identifiers" />
        <Toggler label="Scanner Identifiers" />
        <Toggler label="Date Identifiers" />
        <a href="">
          Custom Profile <span className="ri-arrow-right-s-line"></span>
        </a>
        <div className="d-flex flex-row">
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
          <Button
            className="mt-2"
            style={{ width: "20%", backgroundColor: "#0075be" }}
          >
            {" "}
            <i
              class="ri-upload-cloud-fill"
              style={{ marginRight: "10px", marginTop: "5px" }}
            ></i>
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
