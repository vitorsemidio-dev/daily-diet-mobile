import AsyncStorage from '@react-native-async-storage/async-storage';
import { jsonParse } from '@utils/json-parse';
import { MEAL_COLLECTION } from './storageConfig';
import { Meal } from './types';

export async function mealFetch(): Promise<Meal[]> {
  try {
    const meals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const parsedMeals = meals ? jsonParse<Meal[]>(meals) : [];

    return parsedMeals;
  } catch (err) {
    throw err;
  }
}
