import React, { useState } from "react";
import SearchInput from "../../../components/SearchInput";
import { Card, CardBody, Col, Row, Button } from "reactstrap";
import { MainSelected, ChildSelected } from "..//DatatableData";
import classnames from "classnames";

const FoldersSelection = ({ selectedFolder, setSelectedFolder }) => {
  const [searched, setSearched] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
  };
  const filteredSearch = MainSelected.filter((item) =>
    item.name.toLowerCase().includes(searched.toLowerCase())
  );

  //child search
  const [childFolders, setChildFolders] = useState(false);
  const [childSearched, setChildSearched] = useState("");
  const searchChildHandler = (e) => {
    e.preventDefault();
    setChildSearched(e.target.value);
  };
  const filteredChildSearch = ChildSelected.filter((item) =>
    item.name.toLowerCase().includes(childSearched.toLowerCase())
  );

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <>
      {selectedFolder && (
        <>
          <p>You selected: {selectedFolder.name}</p>
        </>
      )}
      <Card>
        <CardBody>
          <h5 className="text-info">Trials Data</h5>
          <ul>
            <li>Total Trials: {MainSelected.length}</li>
            <li>
              Total Scans :
              {MainSelected.map((folder) => folder.number).reduce(reducer)}
            </li>
          </ul>

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
                    className={classnames({
                      Folder__Selected: selectedFolder.index === item.index,
                      Folder__Lists: true,
                    })}
                    key={item.index}
                    onClick={() => {
                      setChildFolders(true);
                      setSelectedFolder(item);
                    }}
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
            {childFolders && (
              <Col>
                <div className="d-flex justify-content-between">
                  <SearchInput
                    type="text"
                    placeholder="Search Child Folders"
                    name="search"
                    width="400px"
                    value={childSearched}
                    onChange={searchChildHandler}
                  />
                  <Button onClick={() => setChildFolders(false)}>x</Button>
                </div>
                <div className="mt-3 Folder__Scroll">
                  {filteredChildSearch.map((item) => (
                    <li className="Folder__Lists" key={item.index}>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 pb-0">{item.name}</p>
                        <p className="d-flex align-items-center mb-0 pb-0">
                          {item.number}{" "}
                          <i className="ri-arrow-right-s-line"></i>
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
            )}
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default FoldersSelection;
