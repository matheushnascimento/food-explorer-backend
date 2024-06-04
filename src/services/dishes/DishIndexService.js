class DishIndexService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute(search) {
    let dish;
    if (search) {
      dish = await this.dishRepository.fetchDishesBySearch(search);
    } else {
      dish = await this.dishRepository.fetchDishes();
    }
    console.log(dish);
    return dish;
  }
}
module.exports = DishIndexService;
