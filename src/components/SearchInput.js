import React from "react";

const SearchInput = ({
  width,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  //   onBlur,
}) => {
  return (
    <div
      style={{
        width: width,
        display: "flex",
        alignItems: "center",
      }}
    >
      <i className="ml-2 mr-3 position-absolute ri-search-line"></i>
      <input
        className="pl-4"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        // onBlur={onBlur}
      ></input>
    </div>
  );
};

export default SearchInput;
