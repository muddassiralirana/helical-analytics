import React, { useState } from "react";
import Toggler from "../../../../components/Toggler/Toggler";

const Options = () => {
  return (
    <div>

        
      <Toggler label="Download Database" />
      <Toggler label="Delete Database" />
      <Toggler label="Edit Database" />
      <Toggler label="Label" />
      <Toggler label="Fill Empty fields (NA)" />
    </div>
  );
};

export default Options;
