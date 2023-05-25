import { Meal } from "src/types/meal";
import { MealAll } from "./mealAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export const mealUpdate = async ({
  date,
  description,
  hour,
  isOnDiet,
  meal_id,
  title,
}: Meal) => {
  try {
    const meals = await MealAll();

    const newMeals = {
      date,
      description,
      hour,
      isOnDiet,
      meal_id,
      title,
    };

    const updatedMeals = meals.map((meal) =>
      meal.meal_id === newMeals.meal_id ? Object.assign(meal, newMeals) : meal
    );

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
  } catch (error) {
    throw error;
  }
};
