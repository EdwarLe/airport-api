import express from "express";

import { router as routerPassenger } from "./passengers/passengers.route.js";

const app = express();

app.use(express.json());

app.use('/api/v1', routerPassenger)



app.listen(3000, () => {
  console.log("Server is runing on port 3000 😁");
});
