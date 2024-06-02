const { Router } = require("express");

const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishesRoutes = new Router();
const dishesController = new DishesController();

dishesRoutes.get("/", dishesController.show);
dishesRoutes.get("/:id", dishesController.index);
dishesRoutes.post("/", dishesController.create);
dishesRoutes.post("/", ensureAuthenticated, dishesController.update);

module.exports = dishesRoutes;
