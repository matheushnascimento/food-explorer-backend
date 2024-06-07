const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const upload = multer(uploadConfig.MULTER);

const dishesRoutes = new Router();
const dishesController = new DishesController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.get("/", dishesController.index);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.delete(
  "/:id",
  verifyUserAuthorization(["admin"]),
  dishesController.delete
);
dishesRoutes.post(
  "/",
  verifyUserAuthorization(["admin"]),
  upload.single("image"),
  dishesController.create
);
dishesRoutes.put(
  "/:id",
  verifyUserAuthorization(["admin"]),
  upload.single("image"),
  dishesController.update
);

module.exports = dishesRoutes;
