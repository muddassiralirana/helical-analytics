import React, { useState } from "react";
import { Col, Spinner, Row } from "reactstrap";
import CustomCards from "../../../../../components/Common/CustomCards";

const btnData = ["Stop Receiving", "Edit Sharing", "Pause/Stop Recording"];

const ShareBack = () => {
  const [btnSelected, setBtnSelected] = useState(null);
  const toggleBtnState = (active) => {
    setBtnSelected(active);
  };
  return (
    <Row>
      <Col>
        <Spinner style={{ width: "3rem", height: "3rem" }} />
      </Col>

      <Col>
        <div className="d-flex flex-column">
          {btnData.map((item, idx) => (
            <div>
              <CustomCards
                key={idx}
                intent={item}
                onClick={() => toggleBtnState(idx)}
                clicked={btnSelected === idx}
              />
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default ShareBack;
