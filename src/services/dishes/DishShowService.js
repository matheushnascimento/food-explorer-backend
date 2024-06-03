const AppError = require("../../database/knex");

class DishShowService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(id) {
    const dish = await this.dishRepository.findById(id);

    if (typeof dish === "undefined") {
      throw new AppError("Prato não encontrado");
    }

    const ingredients = await this.dishRepository.fetchIngredientsById(id);

    return { ...dish, ingredients };
  }
}

module.exports = DishShowService;
