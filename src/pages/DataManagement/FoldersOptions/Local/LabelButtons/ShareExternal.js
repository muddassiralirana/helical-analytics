import React, { useState } from "react";
import { Spinner, Button, Col } from "reactstrap";

const ShareExternal = () => {
  const [isCancel, setIsCancel] = useState(false);
  return (
    <Col>
      {!isCancel ? (
        <div className="d-flex flex-column align-items-center justify-content-around">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
          <Button
            color="info"
            onClick={() => setIsCancel(true)}
            className="mt-2"
          >
            Cancel
          </Button>
        </div>
      ) : null}
    </Col>
  );
};

export default ShareExternal;
