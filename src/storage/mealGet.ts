import { mealFetch } from './mealFetch';
import { Meal } from './types';

export async function mealGet(id: number): Promise<Meal | undefined> {
  try {
    const meals = await mealFetch();
    const meal = meals.find((meal) => meal.id === id);

    return meal;
  } catch (err) {
    throw err;
  }
}
