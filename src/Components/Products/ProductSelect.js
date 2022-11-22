import React, { Fragment } from "react";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SelectSmall = (props) => {
  return (
    <Fragment>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          sx={{
            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                paddingRight: "75px",
              },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Type"
          value={props.value}
          onChange={props.onItemSelect}
        >
          <MenuItem defaultValue="0">Select</MenuItem>
          {props.dataFilter.map((item, index) => (
            <MenuItem key={index} value={item.type}>
              {item.type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default SelectSmall;
