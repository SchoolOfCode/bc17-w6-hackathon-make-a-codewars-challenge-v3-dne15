export const foodInFridge = [
  "Lamb",
  "Tomatoes",
  "Chicken",
  "Cheese",
  "Broccoli",
  "Milk",
];

export const foodCategories = {
  meat: [],
  dairy: [],
  fruitAndVeg: [],
};

export function arrangeFood() {
  foodInFridge.forEach((item) => {
    if (item === "Chicken" || item === "Lamb") {
      foodCategories.meat.push(item);
    } else if (item === "Milk" || item === "Cheese") {
      foodCategories.dairy.push(item);
    } else if (item === "Tomatoes" || item === "Broccoli") {
      foodCategories.fruitAndVeg.push(item);
    } else {
      throw new Error("You have added an item into the wrong category");
    }
  });
}
arrangeFood();
console.log(foodCategories);
