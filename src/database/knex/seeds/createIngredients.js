exports.seed = async function (knex) {
  await knex("ingredients").insert([
    { name: "alface", dish_id: 1 },
    { name: "cebola", dish_id: 1 },
    { name: "pão naan", dish_id: 1 },
    { name: "pepino", dish_id: 1 },
    { name: "rabanetes", dish_id: 1 },
    { name: "tomate", dish_id: 1 },
  ]);
};
