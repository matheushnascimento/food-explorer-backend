const knex = require("../database/knex");
class DishesRepository {
  async create(dishRecords) {
    const { name, category, price, description, ingredients } = dishRecords;

    const [dish_id] = await knex("dishes").insert({
      name,
      category,
      price,
      description,
    });

    const ingredientsInsert = ingredients.map(ingredient => {
      return {
        dish_id,
        name: ingredient,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);
  }

  async findById(id) {
    const dish = await knex("dishes").where({ id }).first();
    return dish;
  }

  async update(record) {
    const { id } = record;
    await knex("dishes").update(record).where({ id });
  }

  async fetchDishes() {
    const dishes = await knex("dishes");
    return dishes;
  }

  async fetchDishesWithIngredients(filterIngredients) {
    const dishes = await knex("dishes")
      .select([
        "dishes.id",
        "dishes.name",
        "dishes.description",
        "dishes.price",
      ])
      .whereIn("ingredients.name", filterIngredients)
      .innerJoin("ingredients", "ingredients.dish_id", "dishes.id")
      .orderBy("dishes.name")
      .groupBy(["dishes.id"]);
    return dishes;
  }

  async fetchIngredients() {
    const ingredients = await knex("ingredients");
    return ingredients;
  }

  async delete(id) {
    await knex("dishes").where({ id }).delete();
  }
}
module.exports = DishesRepository;
