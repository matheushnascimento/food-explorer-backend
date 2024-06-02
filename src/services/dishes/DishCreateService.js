class DishCreateService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(requestBody) {
    await this.dishRepository.create(requestBody);
  }
}
module.exports = DishCreateService;
