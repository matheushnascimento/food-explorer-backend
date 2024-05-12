const express = require("express");
const routes = require("./routes");

const app = new express();
const PORT = 3333;

app.use(express.json());
app.use(routes)
//iniciar app
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));