const AppError = require("../../utils/AppError");
class DishUpdateService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(dishRecord) {
    const { id } = dishRecord;
    const dish = await this.dishRepository.findById(id);
    if (!dish) {
      throw new AppError("Prato não encontrado", 404);
    }

    await this.dishRepository.update(dishRecord);
  }
}

module.exports = DishUpdateService;
