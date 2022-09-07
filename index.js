import express from "express";
import cors from "cors";

import MNroutes from "./routes/infoMN.js";
import WTroutes from "./routes/infoWT.js";

const app = express();
const PORT = 42220;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("I'm Online!");
});

app.use("/MN", MNroutes);
app.use("/WT", WTroutes);

app.listen(PORT, () => {
  console.log(`MasterNode server run on port ${PORT}`);
});
