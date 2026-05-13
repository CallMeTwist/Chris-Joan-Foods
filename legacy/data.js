/* Chris Joan — product, category, testimonial data */

window.CJ_BRAND = {
  name: "Chris Joan Food and More",
  tagline: "Taste You'll Always Remember",
  whatsapp: "0813 972 0803",
  whatsappRaw: "2348139720803",
  phone: "0806 348 2288",
  email: "hello@chrisjoanfoods.ng",
  address: "Lagos, Nigeria",
  instagram: "@chrisjoanfoods",
  hours: [
    { day: "Mon – Fri", time: "9:00am – 9:00pm" },
    { day: "Saturday", time: "10:00am – 10:00pm" },
    { day: "Sunday", time: "12:00pm – 8:00pm" }
  ]
};

window.CJ_CATEGORIES = [
  { slug: "nigerian-dishes",  name: "Nigerian Dishes",   tag: "Homemade",   blurb: "Soups, swallow and one-pot classics, served the way Mama made them.", img: "images/food-10.jpeg", count: 6 },
  { slug: "rice-dishes",      name: "Rice Dishes",       tag: "Party",      blurb: "Smoky jollof, fried rice and coconut rice — perfect for any spread.",     img: "images/food-01.jpeg", count: 4 },
  { slug: "small-chops",      name: "Small Chops",       tag: "Hangouts",   blurb: "Hot, crunchy bites for hangouts, weddings and Friday night vibes.",      img: "images/food-04.jpeg", count: 5 },
  { slug: "pastries",         name: "Pastries",          tag: "Bakery",     blurb: "Flaky, buttery and fresh from the oven, made in small batches.",         img: "images/food-04.jpeg", count: 4 },
  { slug: "snacks",           name: "Snacks",            tag: "On-the-go",  blurb: "Quick, satisfying little things for tea, lunchboxes and cravings.",      img: "images/food-04.jpeg", count: 4 },
  { slug: "cakes-and-treats", name: "Cakes & Treats",    tag: "Celebrate",  blurb: "Anniversary cakes, mini cakes and trayfuls of red velvet.",              img: "images/food-20.jpeg", count: 6 },
  { slug: "drinks",           name: "Drinks",            tag: "Refresh",    blurb: "Fresh chapman, zobo, smoothies and chilled cartons of juice.",           img: "images/food-05.jpeg", count: 3 }
];

const P = (o) => Object.assign({ rating: 4.8, reviews: 24, ingredients: [], portions: ["Solo", "Family", "Party tray"], featured: false, badge: null }, o);

window.CJ_PRODUCTS = [
  // ===== Nigerian Dishes =====
  P({ slug: "efo-riro",          name: "Efo Riro",                category: "nigerian-dishes", price: 6500, was: null,    img: "images/food-10.jpeg", desc: "Spinach stewed long and slow with locust bean, smoked panla and rich palm-oil base.",                                  story: "A Yoruba Sunday-pot classic. Best with semovita, eba or fluffy white rice. We hand-pick our ugu and shoko leaves at dawn.", ingredients: ["Spinach (ugu / shoko)", "Locust bean (iru)", "Smoked panla", "Pomo", "Palm oil", "Red bell pepper", "Crayfish"], featured: true, badge: "Bestseller", rating: 4.9, reviews: 142 }),
  P({ slug: "egusi-and-pomo",    name: "Egusi & Pomo",            category: "nigerian-dishes", price: 7000,                 img: "images/food-11.jpeg", desc: "Melon-seed soup thickened to a velvet finish with pomo, stockfish and bitter-leaf.", ingredients: ["Ground egusi", "Pomo (cow skin)", "Stockfish", "Bitter leaf", "Palm oil", "Onion", "Crayfish"], rating: 4.8, reviews: 96 }),
  P({ slug: "afang-soup",        name: "Afang Soup",              category: "nigerian-dishes", price: 7500,                 img: "images/food-02.jpeg", desc: "Cross River afang and waterleaf, packed with periwinkle, pomo and beef.",            ingredients: ["Afang leaf", "Waterleaf", "Periwinkle", "Pomo", "Beef", "Palm oil"], rating: 4.9, reviews: 67 }),
  P({ slug: "ofada-stew",        name: "Ofada Stew & Ayamase",    category: "nigerian-dishes", price: 5500,                 img: "images/food-11.jpeg", desc: "Locally-grown ofada rice with green-pepper ayamase, assorted meats and boiled egg.",  ingredients: ["Ofada rice", "Green bell pepper", "Assorted meat", "Locust bean", "Palm oil"], rating: 4.7, reviews: 54 }),
  P({ slug: "vegetable-soup",    name: "Vegetable Soup",          category: "nigerian-dishes", price: 6800,                 img: "images/food-02.jpeg", desc: "A green-on-green pot of ugu and uziza with smoked fish, tender beef and panla.",       ingredients: ["Ugu leaf", "Uziza", "Smoked fish", "Panla", "Beef", "Palm oil"], rating: 4.8, reviews: 41 }),
  P({ slug: "edikang-ikong",     name: "Edikang Ikong",           category: "nigerian-dishes", price: 8500,                 img: "images/food-10.jpeg", desc: "The proper Calabar way — heavy on ugu and waterleaf, light on water, deep on flavour.", ingredients: ["Ugu", "Waterleaf", "Stockfish", "Periwinkle", "Beef", "Palm oil"], rating: 5.0, reviews: 33 }),

  // ===== Rice Dishes =====
  P({ slug: "smoky-jollof",      name: "Smoky Party Jollof",      category: "rice-dishes", price: 4500,                     img: "images/food-01.jpeg", desc: "Long-grain rice cooked over wood-smoke with our house tomato base, served with chicken.", story: "Our jollof is the reason people keep coming back. The smoke is real — open-fire pot, no shortcuts.", ingredients: ["Long-grain rice", "Tomato", "Red bell pepper", "Chicken", "Bay leaf", "Curry"], featured: true, badge: "Most loved", rating: 4.9, reviews: 312 }),
  P({ slug: "fried-rice",        name: "Nigerian Fried Rice",     category: "rice-dishes", price: 4800,                     img: "images/food-03.jpeg", desc: "Carrot, sweet pea, sweet corn and liver, all tossed in a hot wok with curry and thyme.", ingredients: ["Long-grain rice", "Carrot", "Green pea", "Liver", "Sweet corn", "Curry"], rating: 4.7, reviews: 178 }),
  P({ slug: "coconut-rice",      name: "Coconut Rice",            category: "rice-dishes", price: 5000,                     img: "images/food-01.jpeg", desc: "Slow-simmered in fresh coconut milk and served with grilled chicken or pepper sauce.",  ingredients: ["Long-grain rice", "Coconut milk", "Onion", "Bay leaf"], featured: true, rating: 4.8, reviews: 89 }),
  P({ slug: "white-rice-stew",   name: "White Rice & Stew",       category: "rice-dishes", price: 4000,                     img: "images/food-03.jpeg", desc: "Soft white rice served with our slow-cooked tomato stew, fried plantain and beef.",      ingredients: ["Rice", "Tomato stew", "Plantain", "Beef"], rating: 4.6, reviews: 121 }),

  // ===== Small Chops =====
  P({ slug: "classic-small-chops", name: "Classic Small Chops Tray", category: "small-chops", price: 12000,                img: "images/food-04.jpeg", desc: "Puff puff, samosa, spring roll, peppered chicken and suya skewers with house sauces.", story: "The crowd-pleaser. We fry to order in small batches so everything lands hot, crunchy and never greasy.", ingredients: ["Puff puff", "Samosa", "Spring roll", "Peppered chicken", "Suya"], featured: true, badge: "Party-ready", portions: ["Small (serves 4)", "Medium (serves 8)", "Large (serves 15)"], rating: 4.9, reviews: 264 }),
  P({ slug: "puff-puff-bowl",      name: "Puff Puff Bowl",             category: "small-chops", price: 3500,                img: "images/food-04.jpeg", desc: "Light, pillowy puff puff dusted with sugar — sold by the dozen or the bowl.",            ingredients: ["Flour", "Yeast", "Nutmeg", "Sugar"], rating: 4.8, reviews: 88 }),
  P({ slug: "samosa-platter",      name: "Samosa & Spring Roll",       category: "small-chops", price: 4500,                img: "images/food-04.jpeg", desc: "Crisp pastry, spiced beef filling, served with tamarind and pepper dip.",               ingredients: ["Beef", "Onion", "Curry", "Spring-roll pastry"], rating: 4.7, reviews: 56 }),
  P({ slug: "suya-skewers",        name: "Suya Skewers",               category: "small-chops", price: 5500,                img: "images/food-04.jpeg", desc: "Charcoal-grilled beef rubbed in our family yaji blend, with sliced onion and tomato.",  ingredients: ["Beef", "Yaji spice", "Onion", "Tomato"], rating: 4.9, reviews: 73 }),
  P({ slug: "peppered-snail",      name: "Peppered Snail",             category: "small-chops", price: 7500,                img: "images/food-04.jpeg", desc: "Tender snail tossed in a smoky pepper sauce with onion and scotch-bonnet.",             ingredients: ["Snail", "Scotch bonnet", "Onion", "Garlic", "Palm oil"], rating: 4.8, reviews: 29 }),

  // ===== Pastries =====
  P({ slug: "meat-pie",            name: "Hand-folded Meat Pie",   category: "pastries", price: 1200,                       img: "images/food-04.jpeg", desc: "Buttery, flaky shortcrust over seasoned beef, potato and carrot. Made every morning.",  ingredients: ["Flour", "Butter", "Beef", "Potato", "Carrot"], featured: true, rating: 4.9, reviews: 204 }),
  P({ slug: "chicken-pie",         name: "Chicken Pie",            category: "pastries", price: 1500,                       img: "images/food-04.jpeg", desc: "Rich chicken filling, soft pastry, gentle pepper.",                                       ingredients: ["Flour", "Butter", "Chicken", "Carrot"], rating: 4.7, reviews: 91 }),
  P({ slug: "fish-roll",           name: "Fish Roll",              category: "pastries", price: 1000,                       img: "images/food-04.jpeg", desc: "Sardine and spice rolled in a soft, lightly fried bread dough.",                          ingredients: ["Flour", "Sardine", "Onion"], rating: 4.6, reviews: 64 }),
  P({ slug: "scotch-egg",          name: "Scotch Egg",             category: "pastries", price: 1300,                       img: "images/food-04.jpeg", desc: "Boiled egg jacketed in seasoned sausage and crisp golden breadcrumb.",                   ingredients: ["Egg", "Sausage", "Breadcrumb"], rating: 4.7, reviews: 47 }),

  // ===== Snacks =====
  P({ slug: "shawarma",            name: "Beef & Chicken Shawarma", category: "snacks", price: 3500,                        img: "images/food-04.jpeg", desc: "Soft pita, grilled chicken, beef sausage, fresh slaw and garlic-pepper mayo.",            ingredients: ["Pita", "Chicken", "Beef sausage", "Slaw", "Garlic mayo"], rating: 4.8, reviews: 132 }),
  P({ slug: "burger",              name: "Classic Beef Burger",     category: "snacks", price: 4000,                        img: "images/food-04.jpeg", desc: "Hand-pressed beef patty, lettuce, tomato and our house pepper sauce on a brioche bun.",   ingredients: ["Beef patty", "Brioche", "Lettuce", "Tomato"], rating: 4.6, reviews: 51 }),
  P({ slug: "chin-chin",           name: "Chin Chin Pack",          category: "snacks", price: 2500,                        img: "images/food-04.jpeg", desc: "Crunchy little squares of nutmeggy goodness. Sold by the half-litre tub.",                ingredients: ["Flour", "Sugar", "Butter", "Nutmeg"], rating: 4.7, reviews: 88 }),
  P({ slug: "donuts",              name: "Glazed Doughnuts",        category: "snacks", price: 2800,                        img: "images/food-05.jpeg", desc: "Soft, yeasted doughnuts under a thin sugar glaze — 6 to a box.",                          ingredients: ["Flour", "Yeast", "Milk", "Sugar"], rating: 4.8, reviews: 39 }),

  // ===== Cakes & Treats =====
  P({ slug: "anniversary-cake",    name: "Anniversary Velvet Cake",   category: "cakes-and-treats", price: 28000,            img: "images/food-20.jpeg", desc: "Six-inch red-velvet bento with hand-piped lettering. Customise the message at checkout.", story: "Made the day before delivery, never frozen. We use real cream cheese frosting — no shortening.", ingredients: ["Cocoa", "Buttermilk", "Cream cheese", "Vanilla"], featured: true, badge: "Made to order", portions: ["6-inch (serves 4)", "8-inch (serves 8)", "10-inch (serves 14)"], rating: 5.0, reviews: 78 }),
  P({ slug: "mini-cake-trio",      name: "Mini Cake Trio",            category: "cakes-and-treats", price: 18000,            img: "images/food-15.jpeg", desc: "Three 4-inch cakes — pistachio, midnight chocolate, peach — with custom toppers.",       ingredients: ["Butter cake", "Buttercream"], rating: 4.9, reviews: 41 }),
  P({ slug: "happy-birthday-cake", name: "Birthday Butter Cake",      category: "cakes-and-treats", price: 22000,            img: "images/food-09.jpeg", desc: "Classic vanilla butter cake with rose piping, gold pearls and your topper of choice.",   ingredients: ["Butter", "Eggs", "Vanilla", "Flour"], rating: 4.9, reviews: 56 }),
  P({ slug: "gold-ball-cake",      name: "Gold-Pearl Vanilla Cake",   category: "cakes-and-treats", price: 24000,            img: "images/food-08.jpeg", desc: "Tall, ribbed buttercream finish with red berries, gold pearls and a script topper.",     ingredients: ["Butter", "Eggs", "Vanilla", "Fondant"], rating: 4.8, reviews: 22 }),
  P({ slug: "loaf-cake-tray",      name: "Mixed Loaf Tray (6)",       category: "cakes-and-treats", price: 14500,            img: "images/food-07.jpeg", desc: "Six foil-pan loaves: red velvet, banana, coconut, vanilla, marble and chocolate.",        ingredients: ["Butter", "Eggs", "Various flavours"], rating: 4.8, reviews: 64 }),
  P({ slug: "celebration-box",     name: "Mini Celebration Box",      category: "cakes-and-treats", price: 9500,              img: "images/food-05.jpeg", desc: "A 4-inch cake, two cupcakes, small chops and a chilled juice in one branded box.",        ingredients: ["Mini cake", "Cupcakes", "Small chops", "Juice"], featured: true, rating: 4.9, reviews: 117 }),

  // ===== Drinks =====
  P({ slug: "chapman",             name: "House Chapman",             category: "drinks", price: 1500,                       img: "images/food-05.jpeg", desc: "Grenadine, citrus, cucumber and a splash of bitters — the Lagos club classic.",         ingredients: ["Grenadine", "Lemon", "Cucumber", "Bitters"], rating: 4.7, reviews: 38 }),
  P({ slug: "zobo",                name: "Chilled Zobo",              category: "drinks", price: 1200,                       img: "images/food-05.jpeg", desc: "Hibiscus brewed with pineapple, ginger and a hint of clove. Lightly sweet.",            ingredients: ["Hibiscus", "Pineapple", "Ginger", "Clove"], rating: 4.8, reviews: 51 }),
  P({ slug: "smoothie",            name: "Tropical Smoothie",         category: "drinks", price: 1800,                       img: "images/food-05.jpeg", desc: "Mango, banana, pineapple and yoghurt — thick, cold and unbothered.",                     ingredients: ["Mango", "Banana", "Pineapple", "Yoghurt"], rating: 4.6, reviews: 27 })
];

window.CJ_TESTIMONIALS = [
  { name: "Adaeze O.",  loc: "Lekki, Lagos",   rating: 5, text: "Ordered the jollof for my mum's 60th — twelve trays vanished in 30 minutes. The smoky finish is unreal." },
  { name: "Tomi A.",    loc: "Yaba, Lagos",    rating: 5, text: "My go-to for Sunday efo riro. It tastes exactly how my grandmother used to make it, and that is saying a lot." },
  { name: "Kelechi N.", loc: "Ikeja, Lagos",   rating: 5, text: "The small chops tray for our office Friday is a religion at this point. Chops are still hot at 4pm." },
  { name: "Bisola E.",  loc: "Surulere, Lagos",rating: 5, text: "My anniversary cake came beautifully boxed and the cream cheese frosting was perfect. Sister, you delivered." }
];

window.CJ_GALLERY = [
  "images/food-01.jpeg","images/food-02.jpeg","images/food-04.jpeg","images/food-05.jpeg",
  "images/food-07.jpeg","images/food-08.jpeg","images/food-09.jpeg","images/food-10.jpeg",
  "images/food-11.jpeg","images/food-15.jpeg","images/food-20.jpeg","images/food-27.jpeg",
  "images/food-03.jpeg","images/food-06.jpeg","images/food-13.jpeg"
];

window.CJ_HELPERS = {
  fmt: (n) => "₦" + n.toLocaleString('en-NG'),
  catBySlug: (slug) => window.CJ_CATEGORIES.find(c => c.slug === slug),
  prodBySlug: (slug) => window.CJ_PRODUCTS.find(p => p.slug === slug),
  byCat: (slug) => window.CJ_PRODUCTS.filter(p => p.category === slug)
};
