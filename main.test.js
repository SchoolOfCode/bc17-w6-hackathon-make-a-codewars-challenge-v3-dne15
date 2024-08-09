import { test, expect } from "vitest";
import { foodInFridge, foodCategories, arrangeFood } from "./main";

//Test to see if the array contains the correct food items

const foodInFridgeTest = [
  "Lamb",
  "Tomatoes",
  "Chicken",
  "Cheese",
  "Broccoli",
  "Milk",
];

test("Confirm foodInFridge contains correct items", () => {
  expect(foodInFridge).toEqual(foodInFridgeTest);
});

//Test to confirm function is adding items to the correct categories

test("Confirm arrangeFood function is adding correct items", () => {
  expect(foodCategories.meat).toEqual(["Lamb", "Chicken"]);
});

test("Confirm arrangeFood function is adding correct items", () => {
  expect(foodCategories.dairy).toEqual(["Cheese", "Milk"]);
});

test("Confirm arrangeFood function is adding correct items", () => {
  expect(foodCategories.fruitAndVeg).toEqual(["Tomatoes", "Broccoli"]);
});

// Test to identify an unknown item is entered into the array

test("Invalid item added to array", () => {
  foodInFridge.push("Juice");
  expect(() => arrangeFood()).toThrowError(
    "You have added an item into the wrong category"
  );
});

//Test to identify when an item has been added to the wrong category

test("Throw error when an item is added to the wrong category", () => {
  foodCategories.meat.push("Cheese");
  expect(() => arrangeFood()).toThrowError(
    "You have added an item into the wrong category"
  );
});
