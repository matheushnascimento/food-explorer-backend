class DishUpdateService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(id) {
    const dish = await this.dishRepository.findById(id);
    return dish;
  }
}

module.exports = DishUpdateService;
