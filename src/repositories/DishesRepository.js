const knex = require("../database/knex");
class DishesRepository {
  async create(dishRecords) {
    await knex("dishes").insert(dishRecords);
  }

  async findById(id) {
    const dish = await knex("dishes").where({ id }).first();
    return dish;
  }
}
module.exports = DishesRepository;
