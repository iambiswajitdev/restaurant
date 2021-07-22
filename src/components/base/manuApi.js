const manu = [
  {
    id: 1,
    images:
      "https://www.macheesmo.com/wp-content/uploads/2014/04/Home-Fries-feature.jpg",
    name: "Fries",
    catagory: "breakfast",
    price: 100,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 2,
    images:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Chicken_and_waffles_with_peaches_and_cream.jpg",
    name: "chicken and waffles",
    catagory: "breakfast",
    price: 180,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 3,
    images:
      "https://img-global.cpcdn.com/recipes/a74d6a5e8953583e/751x532cq70/palak-poori-and-aloo-matar-recipe-main-photo.jpg",
    name: "​Palak pooris",
    catagory: "breakfast",
    price: 150,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 4,
    images:
      "https://assets.bonappetit.com/photos/57acec251b3340441497533d/1:1/w_2560%2Cc_limit/ba-best-breakfast-sandwich.jpg",
    name: "Sandwich",
    catagory: "breakfast",
    price: 50,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 5,
    images:
      "https://more.ctv.ca/content/dam/lifestyle/uploadImg/2020/5/17/crispy-salt--n--vinegar-potato-chips.jpg",
    name: "Potato Chips",
    catagory: "snack",
    price: 70,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 6,
    images:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/51755.jpg?output-format=auto&output-quality=auto",
    name: "Cheese Crackers",
    catagory: "snack",
    price: 70,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 7,
    images:
      "https://www.seriouseats.com/thmb/cVDg7y6L5z8wZYHpm7ziXNlbWaw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__01__20150126-popcorn-flavors-2-daniel-gritzer-10-0496040b88364a798c03bc8503e7998b.jpg",
    name: "Popcorn",
    catagory: "snack",
    price: 70,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ... ",
  },
  {
    id: 9,
    images:
      "https://www.vidhyashomecooking.com/wp-content/uploads/2020/09/MethiParathaRecipe-1.jpg",
    name: "Methi parantha",
    catagory: "lunch",
    price: 85,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 10,
    images:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Portion_Control_Meal_Plate_Manga_Pachadi_Cabbage_Carrot_Thoran_Mixed_Vegetable_sambar_Rice_Papd-1.jpg",
    name: "Rice, sambar",
    catagory: "lunch",
    price: 170,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 11,
    images:
      "https://www.sharmispassions.com/wp-content/uploads/2019/03/MasalaPoha3-475x500.jpg",
    name: "Masala poha",
    catagory: "lunch",
    price: 110,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 13,
    images:
      "https://www.chinasichuanfood.com/wp-content/uploads/2014/09/steamed-chicken-recipe-4th-1-500x375.jpg",
    name: "steamed chicken",
    catagory: "lunch",
    price: 90,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 14,
    images:
      "https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900",
    name: "samosa",
    catagory: "evening",
    price: 55,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ... ",
  },
  {
    id: 15,
    images: "https://i.ytimg.com/vi/gJrfgtiXapM/maxresdefault.jpg",
    name: "Vegetable Chop",
    catagory: "evening",
    price: 60,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 16,
    images:
      "https://recipesinhindi.net/wp-content/uploads/2017/12/Screenshot.png",
    name: "Egg Omelette",
    catagory: "evening",
    price: 50,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 17,
    images:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Chicken_Pakoda.jpg",
    name: "chicken pokda",
    catagory: "evening",
    price: 80,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 18,
    images:
      "https://static.toiimg.com/thumb/53240689.cms?width=1200&height=900",
    name: "Tandoori Chicken",
    catagory: "dinner",
    price: 150,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
  {
    id: 19,
    images:
      "https://www.whiskaffair.com/wp-content/uploads/2020/09/Matar-Paneer-2-3.jpg",
    name: "Matar Paneer",
    catagory: "dinner",
    price: 100,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ... ",
  },
  {
    id: 20,
    images:
      "https://myheartbeets.com/wp-content/uploads/2020/10/instant-pot-dal-tadka-500x375.jpg",
    name: "Dal Tadka",
    catagory: "dinner",
    price: 70,
    descrip:
      "The moghlai porota (or mughlai paratha) is a flaky, flour pastry filled with a mixture of beaten eggs, keema ...",
  },
];

export default manu;
