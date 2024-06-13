exports.seed = async function (knex) {
  await knex("dishes").insert([
    //#region meal
    {
      name: "Salada Ravanello",
      category: "refeicao",
      image: "db3f5c3e8d18f4f6d975-ravanello.png",
      price: "49",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
    },
    {
      name: "Spaguetti Gambe",
      category: "refeicao",
      image: "8826006025002f0e283b-Spaguetti-Gambe.png",
      price: "79,97",
      description: "Massa fresca com camarões e pesto.",
    },
    {
      name: "Torradas de Parma",
      category: "refeicao",
      image: "5d1423780db7c1627d69-parma.png",
      price: "25,97",
      description:
        "Presunto de parma e rúcula em um pão com fermentação natural.",
    },
    //#endregion
    //#region desserts
    {
      name: "Prugna Pie",
      category: "sobremesa",
      image: "250246f3ffda29668e74-prune.png",
      price: "79,97",
      description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
    },
    {
      name: "Peachy pastrie",
      category: "sobremesa",
      image: "9e753f2b85f2844a32b8-pastry.png",
      price: "32,97",
      description: "Delicioso folheado de pêssego com folhas de hortelã",
    },
    {
      name: "Macarons",
      category: "sobremesa",
      image: "00a4d9bc4e96e7ccee86-macaron.png",
      price: "79,97",
      description: "Farinha de amêndoas, manteiga, claras e açúcar.",
    },
    //#endregion
    //#region drink
    {
      name: "Espresso",
      category: "bebida",
      image: "dc79314f7444412e3ad3-expresso.png",
      price: "15,97",
      description: "Café cremoso feito na temperatura e pressões perfeitas.",
    },
    {
      name: "Suco de maracujá",
      category: "bebida",
      image: "552b6c9c6d894992522b-suco-de-maracuja.png",
      price: "13,97",
      description: "Suco de maracujá gelado, cremoso, docinho.",
    },
    {
      name: "Tè d'autunoo",
      category: "bebida",
      image: "536a82099f35cf51406c-te-dautunno.png",
      price: "19,97",
      description: "Chá de anis, canela e limão. Sinta o outono italiano.",
    },
    //#endregion
  ]);
};
