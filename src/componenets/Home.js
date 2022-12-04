import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { deleUser, accountState } from "../reducers/Account";

export function Home() {
  const accounts = useSelector(accountState);

  const dispatch = useDispatch();

  return (
    <MDBContainer>
    
      <Form />
      <MDBTable striped className={"container w-50 mt-4 table-hover table-striped"}>
        <MDBTableHead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">customer Name</th>
            <th scope="col">Acc Num</th>
            <th scope="col">Acc Type</th>
            <th scope="col">Action</th>

          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {accounts.map((e) => {
            return (
              <tr key={e.id}>
                <th scope="row">{e.id}</th>
                <td>{e.customerName}</td>
                <td>{e.accountNumber}</td>
                <td>{e.accountType}</td>
                <td>
                  <MDBBtn
                    color="warning"
                    onClick={() => {
                      dispatch(deleUser(e.id));
                    }}
                  >
                    <MDBIcon  />
                    delete
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
      <br/>        <br/>
        <br/>
    </MDBContainer>
  );
}

export default Home;