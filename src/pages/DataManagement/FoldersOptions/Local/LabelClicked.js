import React, { useState } from "react";
import CustomCards from "../../../../components/Common/CustomCards";
import Deidentify from "./LabelButtons/Deidentify";
import PushDownload from "./LabelButtons/PushDownload";
import QRNode from "./LabelButtons/QRNode";
import ShareExternal from "./LabelButtons/ShareExternal";
import UploadLocal from "./LabelButtons/UploadLocal";
import TableComponent from "./TableComponent";
import { Row, Col, Container } from "reactstrap";

const btnData = [
  "De-identify",
  "Push / Download",
  "Share External",
  "Upload Local",
  "Q / R Node",
];

const LabelClicked = ({ setNextScreen, nextScreenProps }) => {
  const [btnSelected, setBtnSelected] = useState(null);
  const toggleBtnState = (active) => {
    setBtnSelected(active);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <div>
            <button
              onClick={() => setNextScreen("default")}
              style={{ padding: "0", border: 0, background: "none" }}
            >
              <i className="ri-arrow-left-circle-fill ri-3x pointer"></i>
            </button>

            <p>Folder Name: {nextScreenProps.name}</p>
            <p>Total Scans: {nextScreenProps.total_scans}</p>
          </div>
        </Col>

        <Col>
          <div className="d-flex flex-column mb-3">
            {btnData.map((item, idx) => (
              <>
                <CustomCards
                  key={idx}
                  intent={item}
                  onClick={() => toggleBtnState(idx)}
                  clicked={btnSelected === idx}
                />
              </>
            ))}
          </div>
        </Col>

        {btnSelected === 0 && <Deidentify />}
        {btnSelected === 1 && <PushDownload />}
        {btnSelected === 2 && <ShareExternal />}
        {btnSelected === 3 && <UploadLocal />}
        {btnSelected === 4 && <QRNode />}

        <TableComponent f_id={nextScreenProps.id} />
      </Row>
    </Container>
  );
};

export default LabelClicked;
