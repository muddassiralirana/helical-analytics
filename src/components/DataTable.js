import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import SearchInput from "./SearchInput";

const DataTable = ({
  searched,
  searchHandler,
  filteredSearch,
  setSubFolders,
}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <Col>
              <SearchInput
                type="text"
                placeholder="Search"
                name="search"
                width="400px"
                value={searched}
                onChange={searchHandler}
              />
              <div className="mt-3 Folder__Scroll">
                {filteredSearch.map((item) => (
                  <li
                    className="Folder__Lists"
                    key={item.index}
                    // onClick={() => setSubFolders(true)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 pb-0">{item.name}</p>
                      <p className="d-flex align-items-center mb-0 pb-0">
                        {item.number} <i className="ri-arrow-right-s-line"></i>
                      </p>
                    </div>
                    {item.extra && (
                      <span className="gray-color small-size">
                        {item.extra}
                      </span>
                    )}
                  </li>
                ))}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default DataTable;
