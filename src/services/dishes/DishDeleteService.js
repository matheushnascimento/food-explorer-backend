const AppError = require("../../utils/AppError");
class DishDeleteService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(id) {
    const dishExists = await this.dishRepository.findById(id);
    if (!dishExists) {
      throw new AppError("Prato não encontrado", 404);
    }
    await this.dishRepository.delete(id);
  }
}

module.exports = DishDeleteService;
