require("express-async-errors");
require("dotenv/config");

const express = require("express");
const routes = require("./routes");
const uploadConfig = require("./configs/upload");
const AppError = require("./utils/AppError");

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3333;
const corsOptions = {
  origin: ["http://localhost:5173", "https://127.0.0.1:3333"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
