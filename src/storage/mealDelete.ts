import AsyncStorage from '@react-native-async-storage/async-storage';
import { mealFetch } from './mealFetch';
import { MEAL_COLLECTION } from './storageConfig';

export async function mealDelete(mealId: number): Promise<void> {
  try {
    const meals = await mealFetch();
    const mealsFiltered = meals.filter((meal) => meal.id !== mealId);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsFiltered));
  } catch (err) {
    throw err;
  }
}
