import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from './storageConfig';

type MealCreateParams = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

export async function mealCreate({
  date,
  description,
  hour,
  isDiet,
  name,
}: MealCreateParams) {
  try {
    const meals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const parsedMeals = meals ? JSON.parse(meals) : [];

    const newMeal = {
      id: new Date().getTime(),
      name,
      description,
      date,
      hour,
      isDiet,
    };

    parsedMeals.push(newMeal);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(parsedMeals));
  } catch (err) {
    throw err;
  }
}