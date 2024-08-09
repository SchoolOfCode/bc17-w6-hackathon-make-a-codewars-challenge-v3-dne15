import { test, expect, beforeEach } from "vitest";
import { foodInFridge, foodCategories, arrangeFood } from "./main";

//Test array contains correct food items
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

//Test to confirm function is adding correct items to correct places

test("Confirm arrangeFood function is adding correct items", () => {
  expect(foodCategories.meat).toEqual(["Lamb", "Chicken"]);
});

test("Confirm arrangeFood function is adding correct items", () => {
  expect(foodCategories.dairy).toEqual(["Cheese", "Milk"]);
});

test("Confirm arrangeFood function is adding correct items", () => {
  expect(foodCategories.fruitAndVeg).toEqual(["Tomatoes", "Broccoli"]);
});

//test for when unknown item is entered into array
test("Invalid item added to array", () => {
  foodInFridge.push("Juice");
  expect(() => arrangeFood()).toThrowError(
    "You have added an item into the wrong category"
  );
});

test("Throw error when an item is added to the wrong category", () => {
  foodCategories.meat.push("Cheese");
  expect(() => arrangeFood()).toThrowError(
    "You have added an item into the wrong category"
  );
});
