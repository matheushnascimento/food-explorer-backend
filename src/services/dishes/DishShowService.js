class DishShowService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }
  async execute(requestQuery) {
    const { ingredients } = requestQuery;

    let dishes;

    if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map(ingredient => ingredient.trim());

      dishes = await this.dishRepository.fetchDishesWithIngredients(
        filterIngredients
      );

      const dishesIngredient = await this.dishRepository.fetchIngredients();
      const dishesWithIngredient = dishes.map(dish => {
        const dishIngredients = dishesIngredient.filter(
          ingredient => ingredient.dish_id === dish.id
        );

        return {
          ...dish,
          ingredients: dishIngredients,
        };
      });

      return dishesWithIngredient;
    } else {
      dishes = await this.dishRepository.fetchDishes();
      return dishes;
    }
  }
}

module.exports = DishShowService;
