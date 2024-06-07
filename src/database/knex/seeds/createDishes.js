exports.seed = async function (knex) {
  await knex("dishes").insert([
    {
      id: 1,
      name: "Salada Ravanello",
      category: "bebida",
      price: "49",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
    },
  ]);
};
