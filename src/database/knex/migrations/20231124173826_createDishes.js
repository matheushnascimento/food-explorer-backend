exports.up = knex =>
  knex.schema.createTable("dishes", table => {
    table.increments("id");
    table.text("name");
    table
      .enum("category", ["refeicao", "sobremesa", "bebida"], {
        useNative: true,
        enumName: "categories",
      })
      .notNullable()
      .default("refeicao");
    table.text("image").nullable;
    table.decimal("price");
    table.text("description").nullable;

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTable("dishes");
