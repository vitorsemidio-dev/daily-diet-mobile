import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from './storageConfig';

export type MealFetchResult = {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

export async function mealGet(id: number): Promise<MealFetchResult> {
  try {
    const meals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const parsedMeals = (meals ? JSON.parse(meals) : []) as MealFetchResult[];
    const meal = parsedMeals.find((meal) => meal.id === id);

    return meal;
  } catch (err) {
    throw err;
  }
}
