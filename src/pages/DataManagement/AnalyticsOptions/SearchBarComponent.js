import React, { useState, useEffect } from "react";
import { CardBody, Col, Card, Row, Button, Spinner } from "reactstrap";
import Select from "react-select";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import PivotComponent from "./PivotComponent";
import { firstBar, secondBar, columns1 } from "./SearchBarData";
import EditSelection from "./EditSelection";
import FoldersScanChart from "../../../components/FoldersScanChart";
import isEqual from "lodash.isequal";
import { useDispatch, useSelector } from "react-redux";
import { getStudy } from "../../../store/study/actions";
import { apiClient } from "../../../helpers/apiRequest";

const { SearchBar } = Search;

const SearchBarComponent = ({ FoldersSelected }) => {
  const foldersIds = FoldersSelected.map((folder) => folder.id);

  const [modalityData, setModalityData] = useState([]);

  useEffect(() => {
    async function getModalityByFolder() {
      const dataToSend = {
        folders: foldersIds,
      };

      const { data, error } = await apiClient.post(
        "/study/modalityCountByFolder",
        dataToSend
      );
      if (data) {
        setModalityData(data.data);
      } else if (error) {
        console.error(error);
      }
    }

    getModalityByFolder();
  }, [foldersIds]);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (modalityData.length > 0) {
    setModalityData({
      label: "(0008, 0060) Modality",
      totalCount: modalityData
        .map((data) => data.modality_count)
        .reduce(reducer),
    });
  }

  console.log(modalityData);

  const [selected, setSelected] = useState({
    label: "Select Category",
    value: null,
  });
  const [subSelected, setSubSelected] = useState([]);
  const [allSelection, setAllSelection] = useState([]);
  const [filterSubCategory, setFilterSubCategory] = useState([]);
  const [freezeChart, setFreezeChart] = useState([]);

  const [newFolder, setNewFolder] = useState(false);
  const [previewTable, setPreviewTable] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditItem, setIsEditItem] = useState(false);

  //for and or selection
  const [andOrSelection, setAndOrSelection] = useState("");
  const andOrHandleSelect = (e) => {
    let val = e.target.value;
    setAndOrSelection(val);
  };

  // first selection
  const handleSelection = (_selected) => {
    setFilterSubCategory(
      secondBar.filter((item) =>
        item.label.toLowerCase().includes(_selected.label.toLowerCase())
      )
    );
    setSelected(_selected);
  };

  // second selection
  const handleSubSelection = (e) => {
    e.preventDefault();

    setAllSelection((prev) => [
      ...prev,
      {
        parent: { label: selected.value, value: selected.value },
        child: subSelected,
        action: andOrSelection,
      },
    ]);

    // cleaning all selects
    setSelected({
      label: "Select Category",
      value: null,
    });

    setSubSelected([]);
    setFilterSubCategory([]);
    // setAndOrSelection("");
  };

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect) {
        setSubSelected((prev) => Array.from(new Set([...prev, row])));
      } else {
        setSubSelected((prev) => prev.filter((item) => item.id !== row.id));
      }
    },
    onSelectAll: (row, isSelect, rowIndex, e) => {
      if (row && isSelect) {
        setSubSelected(isSelect);
      } else {
        setSubSelected([]);
      }
    },
  };

  //startover button clicked
  const clearAll = (e) => {
    e.preventDefault();
    setAllSelection([]);
  };

  //delete icon clicked
  const deleteSelected = (item, idx) => {
    setAllSelection((prev) => prev.filter((singleItem, _idx) => _idx !== idx));
  };

  const editSelected = (item, idx) => {
    setIsEdit(true);
    setIsEditItem({ item, idx });
  };

  //for ui chart (smaller chart when data is less)
  const folderCountForUI = FoldersSelected.map(
    (folders) => folders.Folders
  ).length;

  const md = folderCountForUI > 10 ? 9 : 5;

  return (
    <Card>
      <CardBody>
        {FoldersSelected.length > 0 && (
          <Row>
            <Col md={md}>
              <FoldersScanChart
                name="Folders Scan"
                xaxisData={FoldersSelected.map((folders) => folders.Folders)}
                yaxisData={FoldersSelected.map((folders) => folders.count)}
              />
            </Col>
            {Object.keys(modalityData).length > 0 && (
              <Col md={3}>
                <FoldersScanChart
                  name="Total Modality Count in selected folders"
                  xaxisData={[modalityData.label]}
                  yaxisData={[modalityData.totalCount]}
                />
              </Col>
            )}
          </Row>
        )}

        <h4 className="text-info">Searching</h4>
        {isEdit ? (
          <EditSelection
            editItemIdx={isEditItem.idx}
            isEditItem={isEditItem.item}
            setIsEdit={setIsEdit}
            allSelection={allSelection}
            setAllSelection={setAllSelection}
          />
        ) : (
          <>
            <Row>
              <Col md={3}>
                <Select
                  value={selected}
                  onChange={handleSelection}
                  options={firstBar}
                  class
                  NamePrefix="select2-selection"
                />
                <Button
                  outline
                  color="info"
                  className="mt-2"
                  onClick={clearAll}
                >
                  Clear All
                </Button>
              </Col>

              {selected.value && (
                <>
                  <Col md={5}>
                    {filterSubCategory.map((item) => (
                      <ToolkitProvider
                        keyField="id"
                        bootstrap4
                        data={item.options}
                        columns={columns1}
                        search
                        selectRow={selectRow}
                      >
                        {(props) => (
                          <div>
                            <SearchBar {...props.searchProps} />
                            <Button
                              outline
                              color="info"
                              className="ml-2 mb-1"
                              onClick={() => {
                                setFreezeChart((prev) => {
                                  const matched = prev.find((item) =>
                                    isEqual(item, filterSubCategory)
                                  );
                                  if (matched) {
                                    return prev;
                                  }
                                  return [...prev, filterSubCategory];
                                });

                                console.log(freezeChart);
                              }}
                            >
                              Freeze Chart
                            </Button>

                            {selected.value && subSelected.length !== 0 && (
                              <>
                                <Button
                                  color="success"
                                  className="ml-2 mb-1"
                                  onClick={handleSubSelection}
                                >
                                  Confirm
                                </Button>
                              </>
                            )}
                            <BootstrapTable
                              {...props.baseProps}
                              selectRow={selectRow}
                              wrapperClasses="table-responsive scroll1"
                            />
                          </div>
                        )}
                      </ToolkitProvider>
                    ))}
                  </Col>
                </>
              )}

              <Col>
                {filterSubCategory.length > 0 && (
                  <FoldersScanChart
                    name={`Sub Scans of ${filterSubCategory[0].label}`}
                    xaxisData={filterSubCategory[0].options.map(
                      (option) => option.value
                    )}
                    yaxisData={filterSubCategory[0].options.map(
                      (option) => option.count
                    )}
                  />
                )}
              </Col>
            </Row>
            <Row>
              {freezeChart.length > 0 &&
                freezeChart.map((chart) => (
                  <Col md={4}>
                    <FoldersScanChart
                      name={`Sub Scans of ${chart[0].label}`}
                      xaxisData={chart[0].options.map((option) => option.value)}
                      yaxisData={chart[0].options.map((option) => option.count)}
                    />
                  </Col>
                ))}
            </Row>
          </>
        )}
        <Row className="my-3">
          {allSelection.length !== 0
            ? allSelection.map((item, idx) => (
                <>
                  <Col md={4}>
                    <div className="AfterSelect_Box_Container">
                      <div className="AfterSelect_Box_Icons">
                        <i
                          className="ri-delete-bin-2-line pointer"
                          onClick={() => deleteSelected(item, idx)}
                        ></i>
                        <i
                          className="ri-edit-line pointer"
                          onClick={() => editSelected(item, idx)}
                        ></i>
                      </div>
                      <div className="AfterSelect_Box">
                        <p className="m-0 p-0">
                          {item.parent.value} :
                          <ul>
                            {item.child.map((sub) => (
                              <li>{sub.value}</li>
                            ))}
                          </ul>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <div className="d-flex align-items-center">
                    {/* <p className="SearchPlus">+</p> */}
                    <select
                      className="form-control"
                      onChange={(e) => andOrHandleSelect(e)}
                      value={andOrSelection}
                    >
                      <option value="select">Select</option>
                      <option value="and">and</option>
                      <option value="or">or</option>
                    </select>
                  </div>
                </>
              ))
            : null}
        </Row>

        {allSelection.length !== 0 && (
          <>
            <Row>
              <Col md={2}>
                <Button
                  color="info"
                  className="mt-3"
                  onClick={() => setNewFolder(true)}
                >
                  Move to a new folder
                </Button>
              </Col>
              <Col md={2}>
                <Button
                  color="info"
                  className="mt-3"
                  onClick={() => setPreviewTable(true)}
                >
                  Preview Table
                </Button>
              </Col>
            </Row>
          </>
        )}

        {newFolder && <p className="mt-3">Add to new folder</p>}
        {(newFolder || previewTable) && (
          <Row>
            <Col>
              <PivotComponent allSelection={allSelection} />
            </Col>
          </Row>
        )}
      </CardBody>
    </Card>
  );
};

export default SearchBarComponent;
