const DishesRepository = require("../repositories/DishesRepository");
const DishCreateService = require("../services/dishes/DishCreateService");

class DishesController {
  async show(req, res) {
    return res.status(200).json();
  }
  async index(req, res) {
    return res.status(200).json();
  }
  async create(req, res) {
    const records = req.body;
    const dishesRepository = new DishesRepository();
    const dishCreateService = new DishCreateService(dishesRepository);
    await dishCreateService.execute(records);

    return res.status(200).json();
  }
  async update(req, res) {
    return res.status(200).json();
  }
}

module.exports = DishesController;
