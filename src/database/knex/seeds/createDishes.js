exports.seed = async function (knex) {
  await knex("dishes").insert([
    //REFEIÇÃO
    {
      name: "Salada Ravanello",
      category: "refeicao",
      price: "49",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
    },
    {
      name: "Spaguetti Gambe",
      category: "refeicao",
      price: "79,97",
      description: "Massa fresca com camarões e pesto.",
    },
    {
      name: "Torradas de Parma",
      category: "refeicao",
      price: "25,97",
      description:
        "Presunto de parma e rúcula em um pão com fermentação natural.",
    },
    //SOBREMESAS
    {
      name: "Prugna Pie",
      category: "sobremesa",
      price: "79,97",
      description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
    },
    {
      name: "Peachy pastrie",
      category: "sobremesa",
      price: "32,97",
      description: "Delicioso folheado de pêssego com folhas de hortelã",
    },
    {
      name: "Macarons",
      category: "sobremesa",
      price: "79,97",
      description: "Farinha de amêndoas, manteiga, claras e açúcar.",
    },
    //BEBIDAS
    {
      name: "Espresso",
      category: "bebida",
      price: "15,97",
      description: "Café cremoso feito na temperatura e pressões perfeitas.",
    },
    {
      name: "Suco de maracujá",
      category: "bebida",
      price: "13,97",
      description: "Suco de maracujá gelado, cremoso, docinho.",
    },
    {
      name: "Tè d'autunoo",
      category: "bebida",
      price: "19,97",
      description: "Chá de anis, canela e limão. Sinta o outono italiano.",
    },
  ]);
};
