import React from "react";
import { DisplayLoansSC, LoanSC } from "../ui/loan";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
function SearchResult({ history }) {
  console.log(history.location);
  let loan = {};
  if (
    history.location.state === undefined ||
    history.location.state === null ||
    history.location.state.length === 0
  ) {
    return <h3> Member ID is not valid </h3>;
  } else {
    loan = history.location.state[0];
  }
  return (
    <DisplayLoansSC>
      <Link to={{ pathname: "/employeeDetails", state: { ...loan } }}>
        <LoanSC>
          <div className="avatar_div">
            <Avatar size={64} style={{ backgroundColor: "#031529" }}>
              {loan.emp_title !== "" ? loan.emp_title[0] : "U"}
            </Avatar>
          </div>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h4>
              <b>Member ID : </b> {loan.member_id}
            </h4>
            <h4>
              <b> Empoyee: </b>
              {loan.emp_title !== "" ? loan.emp_title : `User${loan.member_id}`}
            </h4>
            <h4>
              <b>Loan Amount :</b>
              <span style={{ color: "#0014ffcc" }}> Rs. {loan.loan_amnt} </span>
            </h4>
            <h4>
              <b>Loan Stauts : </b>
              <span
                style={{
                  color:
                    loan.loan_status.toUpperCase() === "FULLY PAID"
                      ? "green"
                      : "red"
                }}
              >
                {loan.loan_status}
              </span>
            </h4>
          </div>
        </LoanSC>
      </Link>
    </DisplayLoansSC>
  );
}

export default SearchResult;
