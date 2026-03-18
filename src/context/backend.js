const junkFoodData = [
  {
    id: 1,
    name: "Burger",
    price: 120,
    food_type: "veg",
    category: "Fast Food",
    img: "https://th.bing.com/th/id/OIP.7qnBP_eeU0LPtnIt1y5qhwHaEJ?w=290&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 2,
    name: "Pizza",
    price: 250,
    category: "Fast Food",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.MHcum4wuMWLG6iXvTHIFRgHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 3,
    name: "French Fries",
    price: 90,
    category: "Snacks",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.xqFrXGOoor-NbvUYSxAsRgHaHa?w=162&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 4,
    name: "Hot Dog",
    price: 110,
    category: "Fast Food",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.pfCUxI3Hxw4aGkxIQg5vEwHaEW?w=218&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 5,
    name: "Sandwich",
    price: 80,
    category: "Snacks",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.EPq0t0Y8HOa5Dw9oojxp0gHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 6,
    name: "Pasta",
    price: 180,
    category: "Italian",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.G2HMoVaTQd3nu0MphZXUcAHaJf?w=196&h=252&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 7,
    name: "Noodles",
    price: 150,
    food_type: "veg",
    category: "Chinese",
    img: "https://th.bing.com/th/id/OIP.odYdBMMpxdUP3qcX0H9LhAHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 8,
    name: "Momos",
    price: 100,
    food_type: "veg",
    category: "Chinese",
    img: "https://th.bing.com/th/id/OIP.-pUQo6scBAvha9j8YITKegHaE8?w=262&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 9,
    name: "Tacos",
    price: 200,
    food_type: "veg",
    category: "Mexican",
    img: "https://th.bing.com/th/id/OIP.shTZKiJHr-VQaPaVBSy9bgHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 10,
    name: "Nachos",
    price: 160,
    category: "Snacks",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.umP_02MTbSBCJ-yRc2L32AHaFc?w=187&h=150&c=6&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 11,
    name: "Fried Chicken",
    food_type: "non-veg",
    price: 220,
    category: "Non-Veg",
    img: "https://th.bing.com/th/id/OIP.syXjQLPnhAfJS5COCRoz0gHaIr?w=125&h=150&c=6&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 12,
    name: "Chicken Wings",
    price: 240,
    category: "Non-Veg",
    food_type: " Non-veg",
    img: "https://th.bing.com/th/id/OIP.Rq617kDxKXVZtblhM66DJAHaEK?w=316&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 13,
    name: "Donut",
    price: 60,
    category: "Dessert",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.aZX1R_coQw25LHmbYM_6fQHaHa?w=178&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 14,
    name: "Ice Cream",
    price: 70,
    food_type: "veg",
    category: "Dessert",
    img: "https://th.bing.com/th/id/OIP.vnXHYRmgT5MuId67JQfFVQHaKw?w=125&h=150&c=6&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 15,
    food_type: "veg",
    name: "Chocolate Shake",
    price: 130,
    category: "Beverage",
    img: "https://th.bing.com/th/id/OIP.0Ts4V0sJLhqS5UFZbnQfKQHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 16,
    name: "Cold Drink",
    price: 40,
    food_type: "veg",
    category: "Beverage",
    img: "https://th.bing.com/th/id/OIP.M_ZcOkuvgx1ksb_e0txo0QHaE8?w=205&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 17,
    name: "Cheese Balls",
    price: 95,
    category: "Snacks",food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.-WxMwtVqZ2SnE_GZH1EzlAHaE8?w=196&h=131&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 18,
    name: "Garlic Bread",
    food_type: "veg",
    price: 140,
    category: "Italian",
    img: "https://th.bing.com/th/id/OIP.E_KxlKfmq8B6NQIo8P3XuAHaGQ?w=214&h=181&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 19,
    name: "Spring Rolls",
    price: 120,
    food_type: "veg",
    category: "Chinese",
    img: "https://th.bing.com/th/id/OIP.21oGW0Di2Jm_8paqI6aUOAHaJQ?w=154&h=193&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 20,
    name: "Paneer Roll",
    price: 130,
    food_type: "veg",

    category: "Fast Food",
    img: "https://th.bing.com/th/id/OIP.iBtq4EaSQEfotiQ9FgS8LgHaHQ?w=191&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 21,
    name: "Shawarma",
    food_type: "veg",
    price: 170,
    category: "Middle Eastern",
    img: "https://th.bing.com/th/id/OIP.wzB36y7JXlmfrMRSz95vcAHaLH?w=123&h=150&c=6&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 22,
    name: "Cupcake",
    price: 50,
    category: "Dessert",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.s-Yl5appwE1y1lj_AfwXCAHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 23,
    name: "Popcorn",
    price: 60,
    category: "Snacks",
    food_type: "veg",
    img: "https://th.bing.com/th/id/OIP.ieFH7htlKqURHgRktCsNGAAAAA?w=186&h=186&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 24,
    food_type: "veg",
    name: "Chips",
    price: 30,
    category: "Snacks",
    img: "https://th.bing.com/th/id/OIP.zAuP4ChbZoXyesfq-VYSTwHaEK?w=291&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  },
  {
    id: 25,
    name: "Brownie",
    price: 90,
    food_type: "veg",
    category: "Dessert",
    img: "https://th.bing.com/th/id/OIP.QXTSQVGP0u8jyCNjbz9ssAHaFj?w=196&h=147&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
  }
];

export default junkFoodData;