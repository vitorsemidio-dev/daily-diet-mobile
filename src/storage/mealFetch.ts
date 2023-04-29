import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from './storageConfig';

type MealFetchResult = {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

export async function mealFetch(): Promise<MealFetchResult[]> {
  try {
    const meals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const parsedMeals = meals ? JSON.parse(meals) : [];

    return parsedMeals as MealFetchResult[];
  } catch (err) {
    throw err;
  }
}
