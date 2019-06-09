import { Document } from "mongoose";
export interface ILoan extends Document {
  member_id: number;
  loan_amnt: number;
  funded_amnt_inv: number;
  term: string;
  int_rate: number;
  installment: number;
  grade: string;
  emp_title: string;
  emp_length: string;
  home_ownership: string;
  annual_inc: number;
  verification_status: string;
  issue_d: Date;
  loan_status: string;
  desc: string;
  purpose: string;
  title: string;
  addr_state: string;
  last_pymnt_d: Date;
  last_pymnt_amnt: number;
}
