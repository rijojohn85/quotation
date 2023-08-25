import "dotenv/config";

import express from "express";
import moragn from "morgan";
import env from "./util/validateEnv";

const app = express();

app.use(moragn("dev"));

export default app;
