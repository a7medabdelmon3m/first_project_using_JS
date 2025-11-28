

var key = "meal" ;

var recipes = [];
  recipes = [
  {
    title: "Classic Caesar Salad",
    img: "meal-3.jpg",
    rating: 4.8,
    reviews: 150,
    prepTime: "20 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Italian-American",
    description: "A fresh and vibrant salad featuring crispy romaine lettuce, savory croutons, shaved Parmesan, and a creamy Caesar dressing.", // 👈 الوصف الجديد
    ingredients: [
      "Romaine lettuce, chopped",
      "Cherry tomatoes, halved",
      "Croutons",
      "Parmesan cheese, shaved",
      "Caesar dressing"
    ],
    instruction: [
      "Wash and dry the lettuce thoroughly.",
      "In a large bowl, toss lettuce with Caesar dressing.",
      "Add croutons and cherry tomatoes.",
      "Top with shaved Parmesan cheese.",
      "Serve immediately with fresh black pepper."
    ],
    nutrition: {
      calories: 320,
      protein: "12g",
      carbs: "15g",
      fat: "24g",
      fiber: "4g",
      sodium: "580mg"
    },
    Tips: [
      "Use stale bread to make the best crunchy croutons",
      "Add grilled chicken for extra protein",
      "Chill the plates before serving to keep salad crisp",
      "Make the dressing from scratch for better flavor"
    ]
  },
  {
    title: "Grilled Ribeye Steak",
    img: "meal-8.jpg",
    rating: 4.9,
    reviews: 342,
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "American",
    description: "Juicy ribeye steak, seared to perfection and basted with garlic butter and rosemary for a rich, savory flavor.", // 👈 الوصف الجديد
    ingredients: [
      "2 Ribeye steaks (1 inch thick)",
      "2 cloves garlic, crushed",
      "Fresh rosemary sprigs",
      "3 tablespoons butter",
      "Salt and coarse black pepper"
    ],
    instruction: [
      "Season steaks generously with salt and pepper.",
      "Sear in a hot cast-iron skillet for 3-4 minutes per side.",
      "Add butter, garlic, and rosemary to the pan.",
      "Baste the steak with the melting butter.",
      "Rest for 5-10 minutes before slicing."
    ],
    nutrition: {
      calories: 650,
      protein: "45g",
      carbs: "0g",
      fat: "52g",
      fiber: "0g",
      sodium: "120mg"
    },
    Tips: [
      "Take steak out of fridge 30 mins before cooking",
      "Don't skip the resting period to keep juices in",
      "Use a meat thermometer for perfect doneness",
      "Cut against the grain for tenderness"
    ]
  },
  {
    title: "Tofu Buddha Bowl",
    img: "meal-1.jpg",
    rating: 4.6,
    reviews: 120,
    prepTime: "20 min",
    cookTime: "10 min",
    servings: 1,
    level: "Easy",
    cuisine: "Fusion",
    description: "A colorful and protein-packed bowl featuring pan-fried tofu, fresh edamame, sweet corn, boiled eggs, and seasonal vegetables.", // 👈 الوصف الجديد
    ingredients: [
      "Fried tofu cubes",
      "Boiled quail eggs",
      "Edamame beans",
      "Sweet corn",
      "Red cabbage, shredded",
      "Cucumber and cherry tomatoes"
    ],
    instruction: [
      "Cook rice or quinoa as a base.",
      "Pan-fry tofu cubes until golden brown.",
      "Arrange all vegetables and eggs neatly over the base.",
      "Drizzle with soy sauce or sesame dressing.",
      "Sprinkle with sesame seeds."
    ],
    nutrition: {
      calories: 410,
      protein: "22g",
      carbs: "45g",
      fat: "16g",
      fiber: "8g",
      sodium: "450mg"
    },
    Tips: [
      "Press tofu before cooking to get it crispy",
      "Great for meal prep containers",
      "Swap veggies based on season",
      "Add avocado for extra healthy fats"
    ]
  },
  {
    title: "Chicken Tikka Masala",
    img: "meal-10.jpg",
    rating: 4.9,
    reviews: 512,
    prepTime: "30 min",
    cookTime: "40 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Indian",
    description: "Tender chicken marinated in yogurt and spices, served in a rich, creamy, and mildly spicy tomato sauce with warm naan bread.", // 👈 الوصف الجديد
    ingredients: [
      "500g Chicken breast, cubed",
      "1 cup plain yogurt",
      "Tomato puree",
      "Heavy cream",
      "Garam masala and spices",
      "Fresh cilantro"
    ],
    instruction: [
      "Marinate chicken in yogurt and spices for 1 hour.",
      "Grill or sear chicken pieces until charred.",
      "Simmer tomato puree with cream and spices.",
      "Add chicken to the sauce and cook for 15 minutes.",
      "Serve hot with Naan bread."
    ],
    nutrition: {
      calories: 540,
      protein: "32g",
      carbs: "18g",
      fat: "38g",
      fiber: "3g",
      sodium: "890mg"
    },
    Tips: [
      "Marinate overnight for deeper flavor",
      "Use cashew paste for a thicker sauce",
      "Adjust chili powder for heat level",
      "Garnish with fresh cilantro before serving"
    ]
  },
  {
    title: "Thai Red Curry",
    img: "meal-6.jpg",
    rating: 4.7,
    reviews: 215,
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 3,
    level: "Intermediate",
    cuisine: "Thai",
    description: "A fragrant and spicy curry with coconut milk, red chili paste, bamboo shoots, and fresh Thai basil.", // 👈 الوصف الجديد
    ingredients: [
      "Red curry paste",
      "Coconut milk",
      "Bamboo shoots",
      "Red chili peppers",
      "Thai basil leaves",
      "Meat or Tofu of choice"
    ],
    instruction: [
      "Fry curry paste in a little oil until fragrant.",
      "Pour in coconut milk and bring to a simmer.",
      "Add meat/tofu and vegetables.",
      "Cook until tender.",
      "Garnish with fresh basil and chili."
    ],
    nutrition: {
      calories: 460,
      protein: "15g",
      carbs: "12g",
      fat: "35g",
      fiber: "4g",
      sodium: "620mg"
    },
    Tips: [
      "Don't boil coconut milk rapidly or it may split",
      "Add a splash of fish sauce for umami",
      "Lime leaves add authentic aroma",
      "Serve with jasmine rice"
    ]
  },
  {
    title: "Spicy Glazed Tofu Bowl",
    img: "meal-2.jpg",
    rating: 4.5,
    reviews: 98,
    prepTime: "15 min",
    cookTime: "15 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian Fusion",
    description: "Crispy tofu slices glazed in a fiery chili garlic sauce, served over mixed greens and colorful shredded vegetables.", // 👈 الوصف الجديد
    ingredients: [
      "Firm tofu, sliced",
      "Chili garlic sauce",
      "Green onions",
      "Purple cabbage",
      "Corn kernels",
      "Mixed greens"
    ],
    instruction: [
      "Sauté tofu with chili garlic sauce.",
      "Prepare the salad base with greens and cabbage.",
      "Top with warm spicy tofu.",
      "Sprinkle corn and green onions.",
      "Serve with extra lime juice."
    ],
    nutrition: {
      calories: 380,
      protein: "20g",
      carbs: "28g",
      fat: "18g",
      fiber: "6g",
      sodium: "510mg"
    },
    Tips: [
      "Use extra firm tofu for better texture",
      "Adjust chili sauce to taste",
      "Can be eaten warm or cold",
      "Add sesame oil for aroma"
    ]
  },
  {
    title: "Fresh Baguette Sandwich",
    img: "meal-7.jpg",
    rating: 4.4,
    reviews: 85,
    prepTime: "10 min",
    cookTime: "5 min",
    servings: 1,
    level: "Easy",
    cuisine: "French",
    description: "A simple yet delicious deli-style sandwich on a crispy French baguette, layered with fresh lettuce, tomatoes, and sliced cheese.", // 👈 الوصف الجديد
    ingredients: [
      "Fresh baguette loaf",
      "Lettuce leaves",
      "Cherry tomatoes",
      "Sliced cheese (Swiss or Gouda)",
      "Mustard or butter"
    ],
    instruction: [
      "Slice the baguette lengthwise.",
      "Spread butter or mustard on both sides.",
      "Layer cheese, lettuce, and tomatoes.",
      "Close the sandwich and press lightly.",
      "Serve with a side dip if desired."
    ],
    nutrition: {
      calories: 450,
      protein: "14g",
      carbs: "55g",
      fat: "16g",
      fiber: "3g",
      sodium: "680mg"
    },
    Tips: [
      "Use fresh bakery bread for best results",
      "Toast the bread slightly for crunch",
      "Add olives for a salty kick",
      "Wrap in paper to keep it together"
    ]
  },
  {
    title: "Classic Shrimp Pad Thai",
    img: "meal-5.jpg",
    rating: 4.8,
    reviews: 420,
    prepTime: "20 min",
    cookTime: "10 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Thai",
    description: "Famous stir-fried rice noodles tossed with large shrimp, egg, bean sprouts, and a tangy tamarind sauce, topped with crushed peanuts.", // 👈 الوصف الجديد
    ingredients: [
      "Rice noodles",
      "Large shrimp",
      "Bean sprouts",
      "Egg",
      "Peanuts, crushed",
      "Tamarind sauce"
    ],
    instruction: [
      "Soak rice noodles in warm water.",
      "Stir-fry shrimp until pink, then remove.",
      "Scramble egg in the pan, add noodles and sauce.",
      "Toss with bean sprouts and cooked shrimp.",
      "Serve with lime and crushed peanuts."
    ],
    nutrition: {
      calories: 490,
      protein: "24g",
      carbs: "62g",
      fat: "14g",
      fiber: "3g",
      sodium: "920mg"
    },
    Tips: [
      "Don't overcook the noodles or they get mushy",
      "Fresh tamarind works best for sauce",
      "Wok needs to be very hot",
      "Squeeze lime just before eating"
    ]
  },
  {
    title: "Creamy Pumpkin & Tomato Soup",
    img: "meal-4.jpg",
    rating: 4.6,
    reviews: 180,
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 4,
    level: "Easy",
    cuisine: "Continental",
    description: "A comforting and smooth soup combining roasted pumpkin and tomatoes with heavy cream and topped with crunchy pepitas.", // 👈 الوصف الجديد
    ingredients: [
      "Pumpkin puree",
      "Ripe tomatoes",
      "Heavy cream",
      "Vegetable broth",
      "Pumpkin seeds (Pepitas)",
      "Parsley"
    ],
    instruction: [
      "Roast tomatoes and pumpkin chunks.",
      "Blend roasted veggies with broth until smooth.",
      "Simmer in a pot and stir in cream.",
      "Season with salt, pepper, and herbs.",
      "Garnish with cream swirl and pumpkin seeds."
    ],
    nutrition: {
      calories: 280,
      protein: "6g",
      carbs: "22g",
      fat: "18g",
      fiber: "5g",
      sodium: "420mg"
    },
    Tips: [
      "Roasting vegetables adds sweetness",
      "Use coconut milk for a vegan version",
      "Top with croutons for crunch",
      "Store leftovers for up to 3 days"
    ]
  },
  {
    title: "Roasted Sweet Potato Tacos",
    img: "meal-9.jpg",
    rating: 4.8,
    reviews: 135,
    prepTime: "20 min",
    cookTime: "25 min",
    servings: 3,
    level: "Easy",
    cuisine: "Mexican",
    description: "Vegetarian tacos filled with roasted sweet potatoes, spiced chickpeas, avocado slices, and a squeeze of fresh lime.", // 👈 الوصف الجديد
    ingredients: [
      "Sweet potatoes, diced",
      "Chickpeas",
      "Small flour tortillas",
      "Avocado slices",
      "Lime wedges",
      "Cilantro"
    ],
    instruction: [
      "Toss sweet potatoes and chickpeas in spices and roast.",
      "Warm the tortillas on a skillet.",
      "Fill tacos with the roasted mixture.",
      "Top with avocado and fresh cilantro.",
      "Squeeze fresh lime juice over top."
    ],
    nutrition: {
      calories: 340,
      protein: "9g",
      carbs: "48g",
      fat: "12g",
      fiber: "8g",
      sodium: "380mg"
    },
    Tips: [
      "Add chipotle powder for smokiness",
      "Mash avocado for a creamy spread",
      "Corn tortillas make it gluten-free",
      "Serve with salsa on the side"
    ]
  }
];

// localStorage.setItem( key,JSON.stringify(recipes)) ;

recipes = JSON.parse(localStorage.getItem(key)) ;
// localStorage.clear() ;

var Recipes_template = document.getElementById("Recipes") ;

showMeal() ;

function showMeal(){
    var i = Math.floor(Math.random() * (recipes.length-1)) ;
    var warning = Math.floor(Math.random() * 2) ; 
    var status = (warning === 1) ? "d-flex" : "d-none";
    Recipes_template.innerHTML = `

    <div class="recipe row g-0 overflow-hidden bg-white rounded-4" >
          <div class="left col-12 col-lg-5 position-relative h-100">
            <img
              class="w-100 h-100 position-relative object-fit-cover"
              src= "${recipes[i].img}"
              alt=""
            />
            <div class="review position-absolute bg-white rounded-5 py-2 px-3">
              <i class="fa-solid fa-star text-warning pe-2"></i>
              <span class="pe-2 fw-semibold">${recipes[i].rating}</span>
              <span class="fs14 lh20 fw-normal">(${recipes[i].reviews})</span>
            </div>
            <div
              class="details m-0 row g-3 p-4 position-absolute bg-white rounded-4"
            >
              <div class="item col-4">
                <div class="inner text-center">
                  <i class="fa-solid fa-clock fa-xl" style="color: #ff7a00"></i>
                  <p class="m-0 fs14 lh20 fw-normal">Prep Time</p>
                  <p class="m-0 text-black fw-bold">${recipes[i].prepTime}</p>
                </div>
              </div>

              <div class="item col-4">
                <div class="inner text-center">
                  <i
                    class="fa-solid fa-fire-burner fa-xl"
                    style="color: #ff3b30"
                  ></i>
                  <p class="m-0 fs14 lh20 fw-normal">Cook Time</p>
                  <p class="m-0 text-black fw-bold">${recipes[i].cookTime}</p>
                </div>
              </div>

              <div class="item col-4">
                <div class="inner text-center">
                  <i
                    class="fa-solid fa-people-group fa-xl"
                    style="color: #007bff"
                  ></i>
                  <p class="m-0 fs14 lh20 fw-normal">Servings</p>
                  <p class="m-0 text-black fw-bold">${recipes[i].servings} people</p>
                </div>
              </div>
            </div>
          </div>
          <div class="right col-12 col-lg-7 h-100">
            <div class="top d-flex justify-content-between mb-4">
              <div>
                <div class="d-flex level mb-12">
                  <span
                    class="me-12 bg-success-subtle text-success rounded-5 fw-semibold"
                    >${recipes[i].level}</span
                  >
                  <span
                    class="me-12 bg-primary-subtle text-primary rounded-5 fw-semibold"
                    >${recipes[i].cuisine}</span
                  >
                </div>
                <h3 class="me-8 fw-bold text-black">${recipes[i].title}</h3>
                <p>${recipes[i].description}</p>
              </div>
              <div class="d-flex">
                <div
                  class="icon d-flex align-items-center justify-content-center me-2 rounded-3"
                >
                  <i class="fa-solid fa-bookmark"></i>
                </div>
                <div
                  class="icon d-flex align-items-center justify-content-center rounded-3"
                >
                  <i class="fa-solid fa-share"></i>
                </div>
              </div>
            </div>
            <div
              class="middle ${status} align-items-center p-3 mb-4 bg-danger-subtle text-danger rounded-3 border-start border-5 border-danger boe"
            >
              <div>
                <i class="fa-solid fa-triangle-exclamation fa-lg me-12"></i>
              </div>
              <div>
                <p class="m-0 fw-semibold">Extended Preparation Time</p>
                <p class="m-0 fs14 lh20">
                  This recipe requires more than 45 minutes to prepare. Plan
                  accordingly!
                </p>
              </div>
            </div>
            <div class="panel">
              <nav>
                <div
                  class="nav row g-2 p-3 mb-4 border-bottom"
                  id="nav-tab"
                  role="tablist"
                >
                  <div
                    class="btn-item fw-semibold col-3 d-flex justify-content-center"
                  >
                    <button
                      class="nav-link active d-flex justify-content-center align-items-center text-secondary p-0 pb-2"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <i class="fas fa-list me-2"></i> Ingredients
                    </button>
                  </div>

                  <div
                    class="btn-item fw-semibold col-3 d-flex justify-content-center"
                  >
                    <button
                      class="nav-link d-flex justify-content-center align-items-center text-secondary p-0 pb-2"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <i class="fas fa-book-open me-2"></i> Instructions
                    </button>
                  </div>

                  <div
                    class="btn-item fw-semibold col-3 d-flex justify-content-center"
                  >
                    <button
                      class="nav-link d-flex justify-content-center align-items-center text-secondary p-0 pb-2"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <i class="fas fa-chart-pie me-2"></i> Nutrition
                    </button>
                  </div>

                  <div
                    class="btn-item fw-semibold col-3 d-flex justify-content-center"
                  >
                    <button
                      class="nav-link d-flex justify-content-center align-items-center text-secondary p-0 pb-2"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-tips"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <i class="fas fa-lightbulb me-2"></i> Chef's Tips
                    </button>
                  </div>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane ingrediants fade show active p-4 rounded-4"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  <div class="item d-flex mb-12 align-items-center">
                    <div class="my-count me-12 rounded-circle bg-main"></div>
                    <span>1${recipes[i].ingredients[0]}</span>
                  </div>
                  <div class="item d-flex mb-12 align-items-center">
                    <div class="my-count me-12 rounded-circle bg-main"></div>
                    <span>${recipes[i].ingredients[1]}</span>
                  </div>
                  <div class="item d-flex mb-12 align-items-center">
                    <div class="my-count me-12 rounded-circle bg-main"></div>
                    <span>${recipes[i].ingredients[2]}</span>
                  </div>
                  <div class="item d-flex mb-12 align-items-center">
                    <div class="my-count me-12 rounded-circle bg-main"></div>
                    <span>${recipes[i].ingredients[3]}</span>
                  </div>
                  <div class="item d-flex mb-12 align-items-center">
                    <div class="my-count me-12 rounded-circle bg-main"></div>
                    <span>${recipes[i].ingredients[4]}</span>
                  </div>
                </div>
                <div
                  class="tab-pane instructions fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  <div class="item d-flex mb-4">
                    <div
                      class="icon d-flex bg-main rounded-4 me-3 position-relative"
                    ></div>
                    <p>
                      ${recipes[i].instruction[0]}
                    </p>
                  </div>
                  <div class="item d-flex mb-4">
                    <div
                      class="icon d-flex bg-main rounded-4 me-3 position-relative"
                    ></div>
                    <p>
                    ${recipes[i].instruction[1]}
                    </p>
                  </div>
                  <div class="item d-flex mb-4">
                    <div
                      class="icon d-flex bg-main rounded-4 me-3 position-relative"
                    ></div>
                    <p>
                    ${recipes[i].instruction[2]}
                    </p>
                  </div>
                  <div class="item d-flex mb-4">
                    <div
                      class="icon d-flex bg-main rounded-4 me-3 position-relative"
                    ></div>
                    <p>
                    ${recipes[i].instruction[3]}
                    </p>
                  </div>
                  <div class="item d-flex mb-4">
                    <div
                      class="icon d-flex bg-main rounded-4 me-3 position-relative"
                    ></div>
                    <p>
                    ${recipes[i].instruction[4]}
                    </p>
                  </div>
                </div>
                <div
                  class="tab-pane nutritions fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                  tabindex="0"
                >
                  <div class="content">
                    <div
                      class="item p-3 rounded-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-3 me-12"
                          style="
                            background: #ffdeaaff;
                            color: #ff7b00ff;
                            width: 40px;
                            height: 40px;
                          "
                        >
                          <i class="fa-solid fa-fire"></i>
                        </div>
                        <span class="fw-medium">Calories</span>
                      </div>
                      <span class="fw-bold text-black">${recipes[i].nutrition.calories} </span>
                    </div>

                    <div
                      class="item p-3 rounded-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-3 me-12"
                          style="
                            background: #e1ecff;
                            color: #4a90e2;
                            width: 40px;
                            height: 40px;
                          "
                        >
                          <i class="fa-solid fa-dumbbell"></i>
                        </div>
                        <span class="fw-medium">Protein</span>
                      </div>
                      <span class="fw-bold text-black">${recipes[i].nutrition.protein}</span>
                    </div>

                    <div
                      class="item p-3 rounded-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-3 me-12"
                          style="
                            background: #fff4d7;
                            color: #d39b00;
                            width: 40px;
                            height: 40px;
                          "
                        >
                          <i class="fa-solid fa-wheat-awn"></i>
                        </div>
                        <span class="fw-medium">Carbohydrates</span>
                      </div>
                      <span class="fw-bold text-black">${recipes[i].nutrition.carbs}</span>
                    </div>

                    <div
                      class="item p-3 rounded-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-3 me-12"
                          style="
                            background: #ffe1e1;
                            color: #ff3b30;
                            width: 40px;
                            height: 40px;
                          "
                        >
                          <i class="fa-solid fa-droplet"></i>
                        </div>
                        <span class="fw-medium">Fat</span>
                      </div>
                      <span class="fw-bold text-black">${recipes[i].nutrition.fit}</span>
                    </div>

                    <div
                      class="item p-3 rounded-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-3 me-12"
                          style="
                            background: #e4ffe4;
                            color: #2ecc71;
                            width: 40px;
                            height: 40px;
                          "
                        >
                          <i class="fa-solid fa-seedling"></i>
                        </div>
                        <span class="fw-medium">Fiber</span>
                      </div>
                      <span class="fw-bold text-black">${recipes[i].nutrition.fiber}</span>
                    </div>

                    <div
                      class="item p-3 rounded-3 d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="icon d-flex align-items-center justify-content-center rounded-3 me-12"
                          style="
                            background: #ffe4f4;
                            color: #ff4f9a;
                            width: 40px;
                            height: 40px;
                          "
                        >
                          <i class="fa-solid fa-cube"></i>
                        </div>
                        <span class="fw-medium">Sodium</span>
                      </div>
                      <span class="fw-bold text-black">${recipes[i].nutrition.sodium}</span>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane tips fade"
                  id="nav-tips"
                  role="tabpanel"
                  aria-labelledby="nav-disabled-tab"
                  tabindex="0"
                >
                  <div
                    class="item d-flex align-items-center p-3 mb-3 rounded-3 border-start border-5 border-warning bg-warning-subtle"
                  >
                    <i class="fa-solid fa-circle-check txt-main me-3 fa-lg"></i>
                    <p class="m-0">
                      ${recipes[i].Tips[0]}
                    </p>
                  </div>
                  <div
                    class="item d-flex align-items-center p-3 mb-3 rounded-3 border-start border-5 border-warning bg-warning-subtle"
                  >
                    <i class="fa-solid fa-circle-check txt-main me-3 fa-lg"></i>
                    <p class="m-0">
                      ${recipes[i].Tips[1]}
                    </p>
                  </div>
                  <div
                    class="item d-flex align-items-center p-3 mb-3 rounded-3 border-start border-5 border-warning bg-warning-subtle"
                  >
                    <i class="fa-solid fa-circle-check txt-main me-3 fa-lg"></i>
                    <p class="m-0">
                      ${recipes[i].Tips[2]}
                    </p>
                  </div>
                  <div
                    class="item d-flex align-items-center p-3 mb-3 rounded-3 border-start border-5 border-warning bg-warning-subtle"
                  >
                    <i class="fa-solid fa-circle-check txt-main me-3 fa-lg"></i>
                    <p class="m-0">
                      ${recipes[i].Tips[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom mt-32 pt-4 border-top">
              <button
              onclick = "showMeal()" ;
                class="rounded-4 border-0 text-white fw-semibold"
                type="button "
              >
                <i class="fa-solid fa-rotate me-2"></i>
                Try Another Recipe
              </button>
            </div>
          </div>
        </div>

`
}
