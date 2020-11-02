const meals = document.getElementById("meals");

getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

  const respData = await res.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );

  const respData = await resp.json();
  const meal = respData.meals[0];

  return meal;
}

async function getMealsBySearch(term) {
  const meals = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
}

function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");

  meal.innerHTML = `
                <div class="meal-header">
                   
                     ${
                       random
                         ? `
                    <span class="random">
                        Random Recipe
                    </span>
                   `
                         : ""
                     }
                   
                    <img src="${mealData.strMealThumb}" alt="${mealData.Meal}">
                </div>
                <div class="meal-body">
                    <h4>${mealData.strMeal}</h4>
                    <button class="button">
                        <svg class="red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
  `;
  const btn = meal.querySelector(".meal-body .button .red");
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      removeMealFromLS(mealData.idMeal);
      btn.classList.remove("active");
    } else {
      addmealToLS(mealData.idMeal);
      btn.classList.add("active");
    }
  });
  meals.appendChild(meal);
}

function addmealToLS(mealId) {
  const mealIds = getMealsFromLS();

  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealFromLS(mealId) {
  const mealIds = getMealsFromLS();
  
  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id !== mealId))
  );
}

function getMealsFromLS() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));
 
  return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals() {
  // clean the container

  const mealIds = getMealsFromLS();

  const meals = [];
  for (let i = 0; i < mealIds.length; i++) {
    const mealId = mealIds[i];

   meal = await getMealById(mealId);
     
    meals.push(meal);
    // addMealFav(meal);
  }

  // Just keeping the streak
  // Also Just keeping up the streak been working on a wp site so i have been really busy
  // Today is sunday spent the day with my gf hopefully I can get back to coding on here as from 2moro
  // Today is monday,still working on the wordpress site mhen i can't wait to get back to this
;
}
