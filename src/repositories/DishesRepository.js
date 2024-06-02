const knex = require("../database/knex");
class DishesRepository {
  async create(dishRecords) {
    await knex("dishes").insert(dishRecords);
  }
}
module.exports = DishesRepository;
