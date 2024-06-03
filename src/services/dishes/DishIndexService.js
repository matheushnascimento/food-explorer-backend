class DishIndexService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute() {
    const dishes = await this.dishRepository.fetchDishes();
    return dishes;
  }
}
module.exports = DishIndexService;
