import express from "express";
import dotenv from "dotenv";

import { Connection } from "./database/db.js";

dotenv.config();

const app = express();

const port = 9000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

Connection(DB_USERNAME, DB_PASSWORD);
