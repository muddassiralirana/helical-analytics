import React, { useState } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Container } from "reactstrap";

const DicomDictionary = () => {
  const breadcrumbItems = [
    { title: "Home", link: "/" },
    { title: "Dicom", link: "#" },
    { title: "Dicom Dictionary", link: "#" },
  ];
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="Dicom Dictionary"
            breadcrumbItems={breadcrumbItems}
          />
        </Container>
      </div>
      {/* content */}
    </React.Fragment>
  );
};

export default DicomDictionary;
