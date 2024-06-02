const knex = require("../database/knex");
class DishesRepository {
  async create(dishRecords) {
    await knex("dishes").insert(dishRecords);
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
    const dishes = await knex("dishes").select();
    return dishes;
  }
}
module.exports = DishesRepository;
