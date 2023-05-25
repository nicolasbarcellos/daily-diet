import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "src/types/meal";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealAll } from "./mealAll";

export const MealCreate = async (newMeal: Meal) => {
  try {
    const meals = await MealAll();

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...meals, newMeal])
    );
  } catch (error) {
    throw error;
  }
};
