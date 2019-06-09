import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Icon } from "antd";
import DisplayLoans from "./components/DisplayLoans";
import TopTenCustomersByLoanAmount from "./components/TopTenCustomersByLoanAmount";
import EmployeeDetails from "./components/EmployeeDetails";
import SearchResult from "./components/SearchResult";

const { Header, Footer, Content } = Layout;

function App({ location }) {
  return (
    <div>
      <Layout className="main-layout">
        <Header className="header-title">
          <Icon type="bank" style={{ fontSize: "38px", marginRight: "9px" }} />
          Lending Club
        </Header>
        <Content>
          <Switch>
            <Route
              exact
              location={location}
              path="/"
              component={DisplayLoans}
            />
            <Route
              exact
              location={location}
              path="/TopTenCustomersByLoanAmount"
              component={TopTenCustomersByLoanAmount}
            />
            <Route
              exact
              location={location}
              path="/employeeDetails"
              component={EmployeeDetails}
            />
            <Route
              exact
              location={location}
              path="/searchResult"
              component={SearchResult}
            />
          </Switch>
        </Content>
        <Footer className="footer">© 2019 Copyright: Lending Club</Footer>
      </Layout>
    </div>
  );
}

export default App;
