const { Router } = require("express");

const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

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
  dishesController.create
);
dishesRoutes.put(
  "/:id",
  verifyUserAuthorization(["admin"]),
  dishesController.update
);

module.exports = dishesRoutes;
