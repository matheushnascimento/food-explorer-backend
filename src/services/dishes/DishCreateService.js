const DiskStorage = require("../../providers/DiskStorage");
class DishCreateService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(req) {
    const { name, category, price, description, ingredient } = req.body;
    const { filename } = req.file;

    const diskStorage = new DiskStorage();

    const imageName = await diskStorage.saveFile(filename);

    await this.dishRepository.create({
      name,
      category,
      price,
      description,
      ingredient,
      imageName,
    });
  }
}
module.exports = DishCreateService;
