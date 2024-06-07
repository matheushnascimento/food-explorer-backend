const knex = require("../database/knex");
class DishesRepository {
  async create(dishRecords) {
    const { name, category, price, description, ingredients, imageName } =
      dishRecords;
    const [dish_id] = await knex("dishes").insert({
      name,
      category,
      price,
      description,
      image: imageName,
    });

    if (ingredients) {
      const ingredientsInsert = ingredients.map(ingredient => {
        return {
          dish_id,
          name: ingredient,
        };
      });
      await knex("ingredients").insert(ingredientsInsert);
    }
  }
  async update(record) {
    const { id } = record;
    const { name, category, price, description, ingredients, imageName } =
      record;
    await knex("dishes").where({ id }).update({
      name,
      category,
      price,
      description,
      image: imageName,
    });

    if (ingredients) {
      const ingredientsInsert = ingredients.map(ingredient => {
        return {
          name: ingredient,
        };
      });
      await knex("ingredients").delete().where({ dish_id: id });
      await knex("ingredients")
        .insert(ingredientsInsert)
        .where({ dish_id: id });
    }
  }
  async findById(id) {
    const dish = await knex("dishes").where({ id }).first();
    return dish;
  }

  async fetchDishes() {
    const dishes = await knex("dishes");
    return dishes;
  }
  async fetchDishesBySearch(search) {
    const dishes = await knex("dishes")
      .select([
        "dishes.id",
        "dishes.category",
        "dishes.name",
        "dishes.description",
        "dishes.price",
      ])
      .whereLike("dishes.name", `%${search}%`)
      .orWhereLike("ingredients.name", `%${search}%`)
      .innerJoin("ingredients", "ingredients.dish_id", "dishes.id")
      .orderBy("dishes.name")
      .groupBy(["dishes.id"]);
    return dishes;
  }
  async fetchIngredientsById(dish_id) {
    const ingredients = await knex("ingredients").where({ dish_id });
    return ingredients;
  }
  async delete(id) {
    await knex("dishes").where({ id }).delete();
  }
}
module.exports = DishesRepository;
