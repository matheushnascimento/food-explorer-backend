exports.seed = async function (knex) {
  await knex("users").insert([
    {
      id: 1,
      name: "admin",
      email: "admin@email.com",
      role: "admin",
      password: "$2a$08$Bm7u6hqQpI.6wE6BHcRTv.fL0gUq9z7D6lZtg.1RrmBanuMJMM1w2",
    },
  ]);
};
