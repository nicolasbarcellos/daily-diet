import { Meal } from "src/types/meal";
import { MealAll } from "./mealAll";
import { MealCreate } from "./mealCreate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export const mealDelete = async (meal_id: string) => {
  try {
    const meals: Meal[] = await MealAll();

    const mealsFiltered = meals.filter((meal) => meal.meal_id !== meal_id);

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...mealsFiltered])
    );
  } catch (error) {
    throw error;
  }
};
