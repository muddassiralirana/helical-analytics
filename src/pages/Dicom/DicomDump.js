import React, { useState } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Container } from "reactstrap";

const DicomDump = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Dicom", link: "#" },
    { title: "Dicom Dump", link: "#" },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Dicom Dump" breadcrumbItems={breadcrumbItems} />
        </Container>
      </div>
      {/* content */}
    </React.Fragment>
  );
};

export default DicomDump;
