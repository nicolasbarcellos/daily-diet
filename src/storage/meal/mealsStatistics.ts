
import { MealAll } from "./mealAll";

 
export const mealStatistics = async () => {

  try {

    const meals = await MealAll();
    
 
   
    const mealsOnDieTSequence = meals.reduce((obj, acc) => {

      if (acc.isOnDiet) {
        obj.onSequence++
      }

      if (obj.bestSequence < obj.onSequence) {
        obj.bestSequence = obj.onSequence
      }

      if (!acc.isOnDiet) {
        
    
         
        obj.onSequence = 0
      }

      return obj
    }, {
      onSequence: 0,
      bestSequence: 0
    })

    const sequence = mealsOnDieTSequence.bestSequence


    const statistics = meals.reduce((obj, item) => {
   
      if (!obj.mealsQuantity) {
        obj.mealsQuantity = 0;
      }

      if (!obj.isOnDiet) {
        obj.isOnDiet = 0;
      }

      if (!obj.isOutDiet) {
        obj.isOutDiet = 0;
      }

      if (item.isOnDiet) {
        obj.isOnDiet++;
      }

      if (!item.isOnDiet) {
        obj.isOutDiet++;
      }

      obj.mealsQuantity++;

      return obj;
    }, {} as Record<string, any>);

    const mealsOnDietPercentage = (
      (100 * statistics.isOnDiet) /
      statistics.mealsQuantity
    ).toFixed(2);

    return { ...statistics, mealsOnDietPercentage, sequence};
  } catch (error) {
    throw error;
  }
};
