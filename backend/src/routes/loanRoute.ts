import express from "express";
import Loan from "../model/loan";

const loanRoute = express.Router();

loanRoute.get("/api/loan/:page?", async (req, res) => {
  try {
    const pageSize = 12;
    let page = parseInt(req.params.page, 10);
    if (page === undefined || page === null || isNaN(page)) {
      page = 1;
    }

    const loan = await Loan.find({})
      .limit(pageSize)
      .skip((page - 1) * pageSize);

    return res.status(200).json({ loan });
  } catch (e) {
    return res.status(404).json({ message: "something went wrong" });
  }
});

loanRoute.post("/api/searchBymemberId", async (req, res) => {
  try {
    const { memberId } = req.body;

    const loan = await Loan.find({ member_id: memberId });

    if (loan.length > 0) {
      return res.status(200).json({ loan });
    } else {
      return res.status(400).json({ message: `${memberId} does't exits` });
    }
  } catch (e) {
    return res.status(404).json({ message: "something went wrong" });
  }
});

loanRoute.post("/api/topTenCustomersByLoanAmount", async (req, res) => {
  try {
    const { verificationStauts, sortBy } = req.body;

    const loan = await Loan.find({ verification_status: verificationStauts })
      .sort({ loan_amnt: sortBy })
      .limit(10);

    return res.status(200).json({ loan });
  } catch (e) {
    return res.status(404).json({ message: "something went wrong" });
  }
});

loanRoute.post("/api/topTenCustomersByIntersetPaid", async (req, res) => {
  try {
    const { year } = req.body;

    const loan = await Loan.find({ last_pymnt_d: { $regex: `.*-${year}` } })
      .sort({ last_pymnt_amnt: -1 })
      .limit(10);

    return res.status(200).json({ loan });
  } catch (e) {
    return res.status(404).json({ message: "something went wrong" });
  }
});

export default loanRoute;
