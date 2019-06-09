import cors from "cors";
import express from "express";
import { createDbConn } from "./createDbConn";
import loanRoute from "./routes/loanRoute";
import bodyParser from "body-parser";
const PORT = 4000;

(async () => {
  const app = express();

  app.disable("x-powered-by");

  await createDbConn();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const CORSconfig = {
    credentials: true,
    origin: "http://localhost:3000"
  };
  app.use(cors(CORSconfig));
  app.use(loanRoute);
  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
})();
