const AppError = require("../../utils/AppError");
const DiskStorage = require("../../providers/DiskStorage");
class DishUpdateService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(req) {
    const { id } = req.params;
    const { name, category, price, description, ingredient } = req.body;
    const { filename } = req.file;

    const diskStorage = new DiskStorage();

    const imageName = await diskStorage.saveFile(filename);

    const dish = await this.dishRepository.findById(id);

    if (!dish) {
      throw new AppError("Prato não encontrado", 404);
    }

    await this.dishRepository.update({
      id,
      name,
      category,
      price,
      description,
      ingredient,
      imageName,
    });
  }
}

module.exports = DishUpdateService;
