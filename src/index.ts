import { initializeRoutes } from "./utils/route";

import express, { json } from "express";

const app = express();
app.use(json());

initializeRoutes(app);

console.log("Listening at http://localhost:3000")
app.listen(3000)