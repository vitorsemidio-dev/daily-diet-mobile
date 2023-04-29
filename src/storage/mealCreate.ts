import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from './storageConfig';
import { Meal } from './types';
import { mealFetch } from './mealFetch';

type MealCreateParams = Omit<Meal, 'id'>;

export async function mealCreate({
  date,
  description,
  hour,
  isDiet,
  name,
}: MealCreateParams) {
  try {
    const meals = await mealFetch();

    const newMeal = {
      id: new Date().getTime(),
      name,
      description,
      date,
      hour,
      isDiet,
    };

    meals.push(newMeal);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (err) {
    throw err;
  }
}
