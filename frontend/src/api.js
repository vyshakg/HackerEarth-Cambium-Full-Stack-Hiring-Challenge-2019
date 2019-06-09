import axios from "axios";

export default {
  loanpagination: function(pageNumber) {
    let url = `/api/loan/${pageNumber}`;
    return axios.get(url).then(res => {
      return res.data;
    });
  },
  searchByMember: function(value) {
    let url = "/api/searchBymemberId";
    return axios
      .post(url, { memberId: value })
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err.response);
        return err.response;
      });
  },
  toptenByLoanAmount: function(verificationStauts, sortBy) {
    let url = "/api/topTenCustomersByLoanAmount";
    return axios.post(url, { verificationStauts, sortBy }).then(res => {
      return res.data;
    });
  }
};
