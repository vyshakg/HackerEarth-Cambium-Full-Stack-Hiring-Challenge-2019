import React, { useState, useEffect } from "react";
import api from "../api";
import { DisplayLoansSC, LoanSC } from "../ui/loan";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { Input, Select } from "antd";

const InputGroup = Input.Group;
const { Option } = Select;

function TopTenCustomersByLoanAmount() {
  const [loanList, setLoanList] = useState([]);
  const [sortBy, setSortBy] = useState(-1);
  const [verificationStatus, setVerificationStatus] = useState("Verified");

  useEffect(() => {
    api
      .toptenByLoanAmount(verificationStatus, sortBy)
      .then(res => setLoanList(res.loan));
  }, [verificationStatus, sortBy]);

  function onChangeLA(value) {
    setSortBy(value);
  }
  function onChangeVS(value) {
    setVerificationStatus(value);
  }

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <h1> Top Ten Customers By Loan Amount </h1>
        <div>
          <InputGroup compact>
            <Select
              style={{ width: 300 }}
              placeholder="Select a sort By loan amount"
              defaultValue="DESC"
              onChange={onChangeLA}
            >
              <Option value="-1">DESC</Option>
              <Option value="1">ASCE</Option>
            </Select>
            <Select
              defaultValue="Verified"
              style={{ width: 300 }}
              placeholder="Select a sort By Verification Status"
              onChange={onChangeVS}
            >
              <Option value="Verified">Verified</Option>
              <Option value="Not Verified">Not Verified</Option>
            </Select>
          </InputGroup>
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
    </>
  );
}

export default TopTenCustomersByLoanAmount;
