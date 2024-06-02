const DishesRepository = require("../repositories/DishesRepository");
const DishCreateService = require("../services/dishes/DishCreateService");
const DishUpdateService = require("../services/dishes/DishUpdateService");

class DishesController {
  async show(req, res) {
    return res.status(200).json();
  }
  async index(req, res) {
    const { id } = req.params;
    const dishesRepository = new DishesRepository();
    const dishUpdateService = new DishUpdateService(dishesRepository);
    const dish = await dishUpdateService.execute(id);

    return res.status(200).json(dish);
  }
  async create(req, res) {
    const records = req.body;
    const dishesRepository = new DishesRepository();
    const dishCreateService = new DishCreateService(dishesRepository);
    await dishCreateService.execute(records);

    return res.status(201).json();
  }
  async update(req, res) {
    return res.status(200).json();
  }
}

module.exports = DishesController;
