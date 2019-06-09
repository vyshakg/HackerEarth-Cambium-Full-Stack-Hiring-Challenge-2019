import { Model, model, Schema } from "mongoose";
import { ILoan } from "../interface/ILoan";

const LoanSchema: Schema = new Schema({
  member_id: {
    type: Number,
    index: true
  },
  loan_amnt: Number,
  funded_amnt_inv: Number,
  term: String,
  int_rate: Number,
  installment: Number,
  grade: String,
  emp_title: String,
  emp_length: String,
  home_ownership: String,
  annual_inc: Number,
  verification_status: String,
  issue_d: String,
  loan_status: String,
  desc: String,
  purpose: String,
  title: String,
  addr_state: String,
  last_pymnt_d: String,
  last_pymnt_amnt: Number
});
LoanSchema.index({ member_id: 1, type: -1 });
const Loan: Model<ILoan> = model<ILoan>("Loan", LoanSchema);
export default Loan;
