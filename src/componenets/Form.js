import React, { useState } from "react";
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addUser } from "../reducers/Account";

export default function Form() {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    id: "Rama",
    customerName: "ooo",
    accountNumber: "",
    accountType: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = {
    type: "ADD_USER",
    payload: formValue,
  };

  return (
    <MDBValidation className="container w-50 mt-4" >
      <MDBValidationItem className="col-md-3 ">
        <MDBInput
          name="id"
          onChange={onChange}
          id="validationCustom01"
          required
          label="id"
        />
      </MDBValidationItem>
      <MDBValidationItem className="col-md-3">
        <MDBInput
          name="customerName"
          onChange={onChange}
          id="validationCustom02"
          required
          label="customer Name"
        />
      </MDBValidationItem>

      <MDBValidationItem
        className="col-md-3"
        feedback="Please provide a valid city."
        invalid
      >
        <MDBInput
          name="accountType"
          onChange={onChange}
          id="validationCustom03"
          required
          label="account Type"
        />
      </MDBValidationItem>
      <MDBValidationItem
        className="col-md-3"
        feedback="Please provide a valid zip."
        invalid
      >
        <MDBInput
          value={formValue.zip}
          name="accountNumber"
          onChange={onChange}
          id="validationCustom05"
          required
          label="account Number"
        />
      </MDBValidationItem>

      <div className="col-12">
        <MDBBtn
          type="submit"
          color="dark"
          onClick={() => {
            dispatch(addUser(formValue));
          }}
        >
          Add User
        </MDBBtn>
      </div>
    </MDBValidation>
    
  );
}