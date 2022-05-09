import React, { useState } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Container } from "reactstrap";

const DicomSummary = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Dicom", link: "#" },
    { title: "Dicom Summary", link: "#" },
  ];
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="Dicom Summary"
            breadcrumbItems={breadcrumbItems}
          />
        </Container>
      </div>
      {/* content */}
    </React.Fragment>
  );
};

export default DicomSummary;
