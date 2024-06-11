// new-express-project/api/index.js
import express from "express";

import router from "./router";

const app = express();

// Use the router
app.use("/", router);

app.listen(3000, () => console.log("Server ready on port 3000"));