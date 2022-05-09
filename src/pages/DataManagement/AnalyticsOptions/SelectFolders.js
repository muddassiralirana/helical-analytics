import React, { useState, useEffect } from "react";
import { CardBody, Row, Col, FormGroup, Card, Spinner } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Select from "react-select";
import {
  optionGroup,
  LocalColumns,
  SharedColumns,
  ReceivedColumns,
} from "./SearchFoldersData";
import { useDispatch, useSelector } from "react-redux";
import { getFolders } from "../../../store/folder/actions";

const { SearchBar } = Search;

const SelectFolders = ({ subSelected, setSubSelected }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.Folder);
  const { folders } = useSelector((state) => state.Folder) || [];

  useEffect(() => {
    dispatch(getFolders());
  }, []);

  //data manipulation for local folders
  const LocalFolders = folders?.local_folder?.map((folder) => ({
    id: folder.id,
    Folders: folder.name,
    count: folder.total_scans,
  }));

  //data manipulation for local folders
  const ReceivedFolders = folders?.received_scan_folder?.map((folder) => ({
    id: folder.id,
    Folders: folder.name,
    count: folder.total_scans,
  }));

  //data manipulation for local folders
  const SharedFolders = folders?.cloud_sharing_folder?.map((folder) => ({
    id: folder.id,
    Folders: folder.name,
    count: folder.total_scans,
  }));

  //for select selection bar
  const [selected, setSelected] = useState({ label: "Selected", value: null });
  const handleSelection = (selected) => {
    setSelected(selected);
    setSubSelected([]);
  };

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    headerColumnStyle: { backgroundColor: "#8EC6FF" },
    bgColor: "#EBEBEA",
    onSelect: (row, isSelect, rowIndex, e) => {
      if (isSelect) {
        setSubSelected((prev) => Array.from(new Set([...prev, row])));
      } else {
        setSubSelected((prev) => prev.filter((item) => item.id !== row.id));
      }
    },
    onSelectAll: (isSelect) => {
      if (isSelect && selected.value === "Local") {
        setSubSelected(LocalFolders);
      } else if (isSelect && selected.value === "Shared") {
        setSubSelected(SharedFolders);
      } else if (isSelect && selected.value === "Received") {
        setSubSelected(ReceivedFolders);
      } else if (isSelect && selected.value === "All") {
        setSubSelected([...LocalFolders, ...SharedFolders, ...ReceivedFolders]);
      } else {
        setSubSelected([]);
      }
    },
  };

  if (loading) {
    return <Spinner style={{ width: "3rem", height: "3rem" }} />;
  }

  if (error) {
    return "Error fetching data";
  }

  return (
    <Card>
      <CardBody style={{ height: "100vh" }}>
        <Col xl={6}>
          <h4 className="text-info">Select Folders</h4>
          <FormGroup className="select2-container">
            <Select
              value={selected}
              defaultValue={{ label: "Select...", value: null }}
              onChange={handleSelection}
              options={optionGroup}
              classNamePrefix="select2-selection"
            />
          </FormGroup>
        </Col>
        <Row>
          {selected.value === "All" && (
            <>
              <DataTable
                columns={LocalColumns}
                selectRow={selectRow}
                folders={LocalFolders}
              />
              <DataTable
                columns={SharedColumns}
                selectRow={selectRow}
                folders={SharedFolders}
              />
              <DataTable
                columns={ReceivedColumns}
                selectRow={selectRow}
                folders={ReceivedFolders}
              />
            </>
          )}

          {selected.value === "Local" && (
            <DataTable
              columns={LocalColumns}
              selectRow={selectRow}
              folders={LocalFolders}
            />
          )}
          {selected.value === "Shared" && (
            <DataTable
              columns={SharedColumns}
              selectRow={selectRow}
              folders={SharedFolders}
            />
          )}
          {selected.value === "Received" && (
            <DataTable
              columns={ReceivedColumns}
              selectRow={selectRow}
              folders={ReceivedFolders}
            />
          )}
        </Row>
      </CardBody>
    </Card>
  );
};

const DataTable = ({ columns, selectRow, folders }) => {
  return (
    <Col md={4}>
      <ToolkitProvider
        keyField="id"
        bootstrap4
        data={folders}
        columns={columns}
        search
        selectRow={selectRow}
      >
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            <BootstrapTable
              {...props.baseProps}
              selectRow={selectRow}
              wrapperClasses="table-responsive scroll"
            />
          </div>
        )}
      </ToolkitProvider>
    </Col>
  );
};

export default SelectFolders;
