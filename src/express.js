const express = require('express');

const router = require("./routes");

const app = express();

app.listen(8080, () => {
  console.log("Server listening on 8080");
});

app.use(router);