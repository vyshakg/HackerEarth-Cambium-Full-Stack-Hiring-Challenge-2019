import React from "react";
import { Descriptions, Avatar, Tag, Badge, Icon } from "antd";
function EmployeeDetails({ location }) {
  const loan = location.state;
  return (
    <>
      <div className="avatar_div">
        <Avatar size={100} style={{ backgroundColor: "#031529" }}>
          {loan.emp_title !== "" ? loan.emp_title[0] : "U"}
        </Avatar>
      </div>
      <div style={{ margin: "auto", width: "50%", textAlign: "center" }}>
        <h2>
          <b>Employee Name :</b>{" "}
          {loan.emp_title === "" ? `User ${loan.member_id}` : loan.emp_title}{" "}
        </h2>
        <h4>
          <b>Descriptions:</b>
          {loan.desc}
        </h4>
      </div>
      <div style={{ margin: "auto", width: "50%", marginBottom: "2rems" }}>
        <Descriptions bordered column={1} border>
          <Descriptions.Item label="Member Id">
            {loan.member_id}
          </Descriptions.Item>

          <Descriptions.Item label="Loan Amount">
            {loan.loan_amnt}
          </Descriptions.Item>
          <Descriptions.Item label="Funded Amount Invest">
            {loan.funded_amnt_inv}
          </Descriptions.Item>
          <Descriptions.Item label="Term">{loan.term}</Descriptions.Item>
          <Descriptions.Item label="Interset Rate">
            <Tag color="cyan">{loan.int_rate}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Installment">
            {loan.installment}
          </Descriptions.Item>
          <Descriptions.Item label="Grade">
            <Badge count={loan.grade} style={{ backgroundColor: "#52c41a" }} />
          </Descriptions.Item>
          <Descriptions.Item label="Employee Experience">
            {loan.emp_length}
          </Descriptions.Item>
          <Descriptions.Item label="Home Ownership">
            {loan.home_ownership}
          </Descriptions.Item>
          <Descriptions.Item label="Annual Income">
            {loan.annual_inc}
          </Descriptions.Item>
          <Descriptions.Item label="verification status">
            {loan.verification_status}
          </Descriptions.Item>
          <Descriptions.Item label="Issue Date">
            <Badge
              count={<Icon type="clock-circle" style={{ color: "#f5222d" }} />}
            >
              {" "}
              {loan.issue_d}{" "}
            </Badge>
          </Descriptions.Item>

          <Descriptions.Item label="Loan Status">
            {loan.loan_status}
          </Descriptions.Item>

          <Descriptions.Item label="purpose">{loan.purpose}</Descriptions.Item>
          <Descriptions.Item label="Title">{loan.title}</Descriptions.Item>

          <Descriptions.Item label="Address State">
            {loan.addr_state}
          </Descriptions.Item>

          <Descriptions.Item label="Last payment Date">
            {loan.last_pymnt_d}
          </Descriptions.Item>

          <Descriptions.Item label="Last payment Amount">
            <Tag color="#108ee9">{loan.last_pymnt_amnt}</Tag>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </>
  );
}

export default EmployeeDetails;
