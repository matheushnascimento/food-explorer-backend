const express = require("express");

const app = new express();
const PORT = 3333;

app.use(express.json());

//iniciar app
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));