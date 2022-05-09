import React, { useState, useEffect } from "react";
import { Col, Button, Row, Card, CardBody, Spinner } from "reactstrap";
import SearchInput from "../../../../components/SearchInput";
import NewClicked from "./NewClicked";
import LabelClicked from "./LabelClicked";
import { getFolders } from "../../../../store/folder/actions";
import { useDispatch, useSelector } from "react-redux";
import "../../styles.scss";

const Local = ({ from }) => {
  // from will be Local if Local is called
  // from will be Deidentified if Deidentified is called
  // change LocalSelected data acc to local and deidentify (when implementing with API)
  const dispatch = useDispatch();
  let { loading, error } = useSelector((state) => state.Folder);
  let { folders } = useSelector((state) => state.Folder) || [];

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  const [nextScreen, setNextScreen] = useState("default");
  const [nextScreenProps, setNextScreenProps] = useState("");

  const [searched, setSearched] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
  };

  let filteredSearch = [];

  if (from === "Local") {
    filteredSearch = folders?.local_folder?.filter((item) =>
      item.name.toLowerCase().includes(searched.toLowerCase())
    );
  }
  if (from === "Deidentified") {
    filteredSearch = folders?.deidentified_folder?.filter((item) =>
      item.name.toLowerCase().includes(searched.toLowerCase())
    );
  }

  return (
    <>
      {nextScreen === "new" ? (
        <NewClicked setNextScreen={setNextScreen} />
      ) : nextScreen === "label" ? (
        <LabelClicked
          setNextScreen={setNextScreen}
          nextScreenProps={nextScreenProps}
        />
      ) : (
        <Card>
          <CardBody>
            <Row>
              <Col md={5}>
                {loading ? (
                  <Spinner style={{ width: "3rem", height: "3rem" }} />
                ) : error ? (
                  <p>Error Fetching Data</p>
                ) : (
                  <div className="Folder__Scroll">
                    {filteredSearch.map((item) => (
                      <li
                        className="Folder__Lists"
                        onClick={() => {
                          setNextScreen("label");
                          setNextScreenProps(item);
                        }}
                        key={item.id}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="mb-0 pb-0">{item.name}</p>
                          <p className="d-flex align-items-center mb-0 pb-0">
                            {item.total_scans}{" "}
                            <i className="ri-arrow-right-s-line"></i>
                          </p>
                        </div>

                        <span className="gray-color small-size">
                          {item.type}
                        </span>
                      </li>
                    ))}
                  </div>
                )}
              </Col>
              <Col xl={5}>
                <Button
                  color="info my-3 arrow-btns"
                  onClick={() => setNextScreen("new")}
                >
                  New <i className="ri-arrow-right-line"></i>
                </Button>

                {folders && (
                  <SearchInput
                    type="text"
                    placeholder="Search"
                    name="search"
                    width="200px"
                    value={searched}
                    onChange={searchHandler}
                  />
                )}
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Local;
