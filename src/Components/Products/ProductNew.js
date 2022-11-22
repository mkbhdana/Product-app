import React, { Fragment, useState } from "react";

import SelectSmall from "./ProductSelect";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ProductNew = (props) => {
  const [state, setState] = useState({
    productSelect: "",
    nameInput: "",
  });

  const productSelectHandler = (e) => {
    setState((prevState) => {
      return { ...prevState, productSelect: e.target.value };
    });
  };

  const nameInputHandler = (e) => {
    setState((prevState) => {
      return { ...prevState, nameInput: e.target.value };
    });
  };

  const addItemHandler = (e) => {
    e.preventDefault();

    if (state.nameInput.trim().length > 0 && state.productSelect !== "") {
      const out = {
        productSelect: state.productSelect,
        nameInput: state.nameInput,
      };

      props.onAddItems(out.productSelect, out.nameInput);

      setState((prevState) => {
        return {
          ...prevState,

          nameInput: e.target.value,
        };
      });
    }
  };

  return (
    <Fragment>
      <div className="container">
        <form className="add-form" onSubmit={addItemHandler}>
          <div>
            <SelectSmall
              value={state.productSelect}
              onItemSelect={productSelectHandler}
              dataFilter={props.data}
            />
          </div>
          <div>
            <TextField
              value={state.nameInput}
              onChange={nameInputHandler}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </div>
          <div>
            <Button onClick={addItemHandler} variant="contained">
              Add
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ProductNew;
