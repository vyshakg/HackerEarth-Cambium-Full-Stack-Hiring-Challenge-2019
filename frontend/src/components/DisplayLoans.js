import React, { useState, useEffect } from "react";
import api from "../api";
import { LoanSC, DisplayLoansSC } from "../ui/loan";
import { Avatar, Pagination, Button } from "antd";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { withRouter } from "react-router-dom";
const Search = Input.Search;
function DisplayLoans({ history }) {
  const [loanList, setLoanList] = useState([]);

  useEffect(() => {
    api.loanpagination().then(res => setLoanList(res.loan));
  }, []);

  function onChange(pageNumber) {
    api.loanpagination(pageNumber).then(res => setLoanList(res.loan));
  }

  function onSearch(value) {
    api
      .searchByMember(value)
      .then(res => history.push({ pathname: "/searchResult", state: res.loan }))
      .catch(err => err.data);
  }

  return (
    <>
      <div style={{ display: "flex", margin: "2rem 1rem 0 1rem" }}>
        <div style={{ flex: 1, marginRight: ".5rem" }}>
          <Button
            type="primary"
            block
            onClick={() => history.push("/TopTenCustomersByLoanAmount")}
          >
            <b>Top Ten Customers By Loan Amount</b>
          </Button>
        </div>

        <div style={{ flex: 1, marginLeft: ".5rem" }}>
          <Search
            placeholder="Search By member Id"
            onSearch={value => onSearch(value)}
            enterButton
          />
        </div>
      </div>

      <DisplayLoansSC>
        {loanList.map(loan => (
          <Link
            to={{ pathname: "/employeeDetails", state: { ...loan } }}
            key={loan._id}
          >
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
                  {loan.emp_title !== ""
                    ? loan.emp_title
                    : `User${loan.member_id}`}
                </h4>
                <h4>
                  <b>Loan Amount :</b>
                  <span style={{ color: "#0014ffcc" }}>
                    {" "}
                    Rs. {loan.loan_amnt}{" "}
                  </span>
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
        ))}
      </DisplayLoansSC>
      {loanList.length >= 12 ? (
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            total={9999}
            defaultPageSize={12}
            onChange={onChange}
          />
        </div>
      ) : null}
    </>
  );
}

export default withRouter(DisplayLoans);
