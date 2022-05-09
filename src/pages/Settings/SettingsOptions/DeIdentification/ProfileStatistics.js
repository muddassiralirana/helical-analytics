import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Type } from "react-bootstrap-table2-editor";
const { SearchBar } = Search;

export const folders = [
  {
    FoldersName: "My Teaching Cases",
    ProfileName: "Default",
  },
  {
    FoldersName: "My Research Cases",
    ProfileName: "Default",
  },
  {
    FoldersName: "Cardiac MR Cases",
    ProfileName: "Default",
  },
];

export const columns = [
  {
    dataField: "FoldersName",
    text: "Folders Name",
    editable: false,
  },
  {
    dataField: "ProfileName",
    text: "Profile Name",
    editor: {
      type: Type.SELECT,
      options: [
        {
          value: "A",
          label: "A",
        },
        {
          value: "B",
          label: "B",
        },
        {
          value: "C",
          label: "C",
        },
      ],
    },
  },
];

const ProfileStatistics = () => {
  return (
    <div>
      <ToolkitProvider
        keyField="id"
        bootstrap4
        data={folders}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
              wrapperClasses="table-responsive scroll"
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
};

export default ProfileStatistics;
