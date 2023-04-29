import AsyncStorage from '@react-native-async-storage/async-storage';
import { mealFetch } from './mealFetch';
import { MEAL_COLLECTION } from './storageConfig';
import { Meal } from './types';

type MealUpdateParams = Meal;

export async function mealUpdate({
  id,
  date,
  description,
  hour,
  isDiet,
  name,
}: MealUpdateParams) {
  try {
    const meals = await mealFetch();
    const mealIndex = meals.findIndex((meal) => meal.id === id);

    meals[mealIndex] = {
      id,
      name,
      description,
      date,
      hour,
      isDiet,
    };

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (err) {
    throw err;
  }
}
