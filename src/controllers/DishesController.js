const DishesRepository = require("../repositories/DishesRepository");

const DishCreateService = require("../services/dishes/DishCreateService");
const DishUpdateService = require("../services/dishes/DishUpdateService");
const DishDeleteService = require("../services/dishes/DishDeleteService");
const DishIndexService = require("../services/dishes/DishIndexService.js");
const DishShowService = require("../services/dishes/DishShowService");

class DishesController {
  async show(req, res) {
    const { id } = req.params;
    const dishesRepository = new DishesRepository();
    const dishShowService = new DishShowService(dishesRepository);

    const dish = await dishShowService.execute(id);
    return res.status(200).json(dish);
  }
  async index(req, res) {
    const { search } = req.query;
    const dishesRepository = new DishesRepository();
    const dishIndexService = new DishIndexService(dishesRepository);

    const dishes = await dishIndexService.execute(search);
    return res.status(200).json(dishes);
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
  async delete(req, res) {
    const { id } = req.params;
    const dishesRepository = new DishesRepository();
    const dishDeleteService = new DishDeleteService(dishesRepository);
    await dishDeleteService.execute(id);

    return res.status(200).json();
  }
}

module.exports = DishesController;
