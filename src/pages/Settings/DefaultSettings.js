import React from "react";
import { Row, Col, Card } from "reactstrap";
import Toggler from "../../components/Toggler/Toggler";
import CustomCards from "../../components/Common/CustomCards";

const DefaultSettings = () => {

  const databaseData = [
    {
      id: 0,
      intent: "Preserve PHI information",
      firstIcon: "ri-information-fill",
    },
    {
      id: 1,
      intent: "Scan Identifier",
      firstIcon: "ri-body-scan-fill",
    },
  ];

  return (
    <div>
      <Row>
        <Col md={4}>
          {databaseData.map((setting) => (
            <CustomCards
              key={setting.id}
              firstIcon={setting.firstIcon}
              intent={setting.intent}

            />
          ))}
        </Col>

        <Col>
          <div style={{marginTop:"20px"}} >
            <Toggler width="0px" />
          </div>
          <div style={{marginTop:"40px"}}>
            <Toggler width="0px" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DefaultSettings;
