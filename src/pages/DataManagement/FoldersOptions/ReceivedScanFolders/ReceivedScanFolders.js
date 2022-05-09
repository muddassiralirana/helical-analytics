import React, { useState, useEffect } from "react";
import { Col, Row, Card, CardBody, Spinner } from "reactstrap";
import CustomCards from "../../../../components/Common/CustomCards";
import PushDownload from "./SubBtns/PushDownload";
import ShareBack from "./SubBtns/ShareBack";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../../../components/SearchInput";
import { getFolders } from "../../../../store/folder/actions";

const btnData = ["Push / Download", "Share Back"];

const ReceivedScanFolders = () => {
  const dispatch = useDispatch();
  let { loading, error } = useSelector((state) => state.Folder);
  let { folders } = useSelector((state) => state.Folder) || [];

  const [btnSelected, setBtnSelected] = useState(null);
  const toggleBtnState = (active) => {
    setBtnSelected(active);
  };

  const [searched, setSearched] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
  };

  let filteredSearch = folders?.received_scan_folder?.filter((item) =>
    item.name.toLowerCase().includes(searched.toLowerCase())
  );

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  if (loading) {
    return <Spinner style={{ width: "3rem", height: "3rem" }} />;
  }

  if (error) {
    return <h3>Error Fetching Data</h3>;
  }

  return (
    <div>
      <Row>
        <Col md={3}>
          <div className="d-flex flex-column">
            {btnData.map((item, idx) => (
              <CustomCards
                key={idx}
                intent={item}
                onClick={() => toggleBtnState(idx)}
                clicked={btnSelected === idx}
              />
            ))}
          </div>
        </Col>

        {btnSelected === 0 && <PushDownload />}
        {btnSelected === 1 && <ShareBack />}
      </Row>
      <div className="mt-3"></div>
      <SearchInput
        type="text"
        placeholder="Search"
        name="search"
        width="200px"
        value={searched}
        onChange={searchHandler}
      />
      <div className="mt-3"></div>
      <Card>
        <CardBody>
          <Row>
            <Col md={4}>
              <div className="Folder__Scroll">
                {filteredSearch.map((item) => (
                  <li className="Folder__Lists" key={item.id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 pb-0">{item.name}</p>
                      <p className="d-flex align-items-center mb-0 pb-0">
                        {item.total_scans}
                        <i className="ri-arrow-right-s-line"></i>
                      </p>
                    </div>

                    <span className="gray-color small-size">{item.type}</span>
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

export default ReceivedScanFolders;
