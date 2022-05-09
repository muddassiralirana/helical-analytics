import React, { useState } from "react";
import {
  Label,
  Input,
  Col,
  Button,
  Form,
  FormGroup,
  UncontrolledAlert,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const UploadLocal = () => {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(null);

  const onValueChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOption);
    if (!selectedOption) {
      //raise error
    } else {
      history.push(`/datamanagement/upload/${selectedOption.toLowerCase()}`);
    }
  };
  return (
    <>
      <Col>
        <Form onSubmit={formSubmit}>
          <FormGroup check>
            <div className="d-flex flex-column mt-3">
              <Label check>
                <Input
                  type="radio"
                  name="radio"
                  value="de-identify"
                  checked={selectedOption === "de-identify"}
                  onChange={onValueChange}
                />
                De-identify
              </Label>
              {selectedOption === "de-identify" && (
                <FormGroup row>
                  <Label className="col-md-4 col-form-label">
                    Enter Name of profile:
                  </Label>
                  <Col md={6}>
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Profile Name"
                    />
                  </Col>
                </FormGroup>
              )}
              <Label check>
                <Input
                  type="radio"
                  name="radio"
                  value="no-action"
                  checked={selectedOption === "no-action"}
                  onChange={onValueChange}
                />
                No Action
              </Label>

              {selectedOption === "no-action" && (
                <UncontrolledAlert
                  color="warning"
                  className="alert-dismissible fade show"
                  role="alert"
                >
                  <i className="mdi mdi-alert-outline mr-2"></i>Are you sure?
                  You have selected no action
                </UncontrolledAlert>
              )}
            </div>
          </FormGroup>
          <Button color="info" className="mt-3 arrow-btns" type="submit">
            Upload Local Drive <i className="ri-arrow-right-line"></i>
          </Button>
        </Form>
      </Col>
    </>
  );
};

export default UploadLocal;
