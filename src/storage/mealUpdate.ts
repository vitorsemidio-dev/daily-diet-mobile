import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from './storageConfig';

type MealUpdateParams = {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

export async function mealUpdate({
  id,
  date,
  description,
  hour,
  isDiet,
  name,
}: MealUpdateParams) {
  try {
    const meals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const parsedMeals = (meals ? JSON.parse(meals) : []) as MealUpdateParams[];
    const mealIndex = parsedMeals.findIndex((meal) => meal.id === id);

    parsedMeals[mealIndex] = {
      id,
      name,
      description,
      date,
      hour,
      isDiet,
    };

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(parsedMeals));
  } catch (err) {
    throw err;
  }
}
