class DishCreateService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(dishRecords) {
    await this.dishRepository.create(dishRecords);
  }
}
module.exports = DishCreateService;
