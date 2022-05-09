import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Col,
  Row,
  Button,
} from "reactstrap";
import SearchInput from "../../../../components/SearchInput";
import FoldersScanChart from "../../../../components/FoldersScanChart";
import { MainSelected, ChildSelected, ChildSubSelected } from "./MergedData";

const Merged = () => {
  return (
    <div>
      <FormGroup check>
        <div className="d-flex flex-column mt-3">
          <Label check>
            <Input type="radio" name="radio1" />
            All New Incoming
          </Label>
          <Label check>
            <Input type="radio" name="radio1" />
            Existing
          </Label>
        </div>
      </FormGroup>
      <br></br>
      <CardComponent />
    </div>
  );
};

export const CardComponent = () => {
  //main search
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

  //sub child search
  const [subChildFolders, setSubChildFolders] = useState(false);

  const [subChildSearched, setSubChildSearched] = useState("");
  const subSearchHandler = (e) => {
    e.preventDefault();
    setSubChildSearched(e.target.value);
  };
  const subFilteredSearch = ChildSubSelected.filter((item) =>
    item.name.toLowerCase().includes(subChildSearched.toLowerCase())
  );

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return (
    <>
      <Card>
        <CardBody>
          <h5 className="text-info">Scans Data</h5>
          <ul>
            <li>Total Folders: {MainSelected.length}</li>
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
                    className="Folder__Lists"
                    key={item.index}
                    onClick={() => setChildFolders(true)}
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
                    <li
                      className="Folder__Lists"
                      key={item.index}
                      onClick={() => setSubChildFolders(true)}
                    >
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

            {subChildFolders && (
              <Col>
                <div className="d-flex justify-content-between">
                  <SearchInput
                    type="text"
                    placeholder="Search Sub Child Folders"
                    name="search"
                    width="200px"
                    value={subChildSearched}
                    onChange={subSearchHandler}
                  />
                  <Button onClick={() => setSubChildFolders(false)}>x</Button>
                </div>

                <div className="mt-3 Folder__Scroll">
                  {subFilteredSearch.map((item) => (
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

          <Row>
            <Col>
              {childFolders && (
                <FoldersScanChart
                  name="Child Folders Scan"
                  xaxisData={ChildSelected.map((folders) => folders.name)}
                  yaxisData={ChildSelected.map((folders) => folders.count)}
                  yaxisTitle="Count"
                />
              )}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Merged;
