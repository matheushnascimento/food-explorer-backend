const DishesRepository = require("../repositories/DishesRepository");
const DishCreateService = require("../services/dishes/DishCreateService");
const DishIndexService = require("../services/dishes/DishIndexService");
const DishUpdateService = require("../services/dishes/DishUpdateService");
const DishShowService = require("../services/dishes/DishShowService");

class DishesController {
  async show(req, res) {
    const dishesRepository = new DishesRepository();
    const dishShowService = new DishShowService(dishesRepository);
    const requestQuery = await dishShowService.execute(req.query);

    return res.status(200).json(requestQuery);
  }
  async index(req, res) {
    const { id } = req.params;
    const dishesRepository = new DishesRepository();
    const dishIndexService = new DishIndexService(dishesRepository);
    const dish = await dishIndexService.execute(id);

    return res.status(200).json(dish);
  }
  async create(req, res) {
    const requestBody = req.body;
    const dishesRepository = new DishesRepository();
    const dishCreateService = new DishCreateService(dishesRepository);
    await dishCreateService.execute(requestBody);

    return res.status(201).json();
  }
  async update(req, res) {
    const { id } = req.params;
    const records = req.body;
    const dishesRepository = new DishesRepository();
    const dishUpdateService = new DishUpdateService(dishesRepository);
    await dishUpdateService.execute({ id, ...records });

    return res.status(200).json();
  }
}

module.exports = DishesController;
