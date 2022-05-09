import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import Select from "react-select";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import PivotComponent from "./PivotComponent";
import { firstBar, secondBar, columns1 } from "./SearchBarData";
const { SearchBar } = Search;

const EditSelection = ({
  editItemIdx,
  isEditItem,
  setIsEdit,
  allSelection,
  setAllSelection,
}) => {
  const [selected, setSelected] = useState(isEditItem.parent);
  const [subSelected, setSubSelected] = useState(isEditItem.child);

  const childCategories = secondBar.filter((item) =>
    item.label.toLowerCase().includes(isEditItem.parent.label.toLowerCase())
  );

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
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const editedObj = {
      parent: (allSelection.find((obj) => obj === isEditItem).parent = {
        label: selected.value,
        value: selected.value,
      }),
      child: (allSelection.find((obj) => obj === isEditItem).child =
        subSelected),
    };

    setAllSelection((prev) => {
      const temp = [...prev];
      temp[editItemIdx] = editedObj;
      return temp;
    });
    setIsEdit(false);
  };

  return (
    <Row>
      <Col md={4}>
        <Select
          value={selected}
          isDisabled={true}
          options={firstBar}
          classNamePrefix="select2-selection"
        />
      </Col>

      <Col md={4}>
        {childCategories.map((item) => (
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

      <Col>
        {selected.value && (
          <>
            <Button color="success" className="mt-3" onClick={handleEdit}>
              Confirm Edit
            </Button>
          </>
        )}
      </Col>
    </Row>
  );
};

export default EditSelection;
