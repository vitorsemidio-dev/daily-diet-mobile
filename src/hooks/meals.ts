import { Meal } from '@storage/types';
import { formatPercent } from '@utils/format-percent';
import { dateAdapter } from '@utils/date-adapter';

export function useMeals(meals: Meal[]) {
  const getTotal = () => {
    return meals.length;
  };
  const getMealDiet = () => {
    return meals.filter((meal) => meal.isDiet).length;
  };
  const getMealNotDiet = () => {
    return meals.filter((meal) => !meal.isDiet).length;
  };
  const getMealPercent = () => {
    return getMealDiet() / getTotal() || 1;
  };
  const getMealPercentFormatted = () => {
    return formatPercent(getMealDiet() / getTotal() || 1);
  };
  const getMealBestSequence = () => {
    const bestSequence = calculateBestSequence(meals);
    return bestSequence;
  };
  const isMostlyDiet = () => {
    return getMealDiet() > getMealNotDiet();
  };
  const metrics = {
    total: getTotal(),
    diet: getMealDiet(),
    notDiet: getMealNotDiet(),
    bestSequence: getMealBestSequence(),
    metricsPercentFormatted: getMealPercentFormatted(),
    isMostlyDiet: isMostlyDiet(),
  };

  return {
    getTotal,
    getMealDiet,
    getMealNotDiet,
    getMealPercent,
    getMealPercentFormatted,
    getMealBestSequence,
    isMostlyDiet,
    metrics,
  };
}

function calculateBestSequence(meals: Meal[]): number {
  let bestSequence = 0;

  const mealsSorted = meals
    .map((meal) => ({
      ...meal,
      date: dateAdapter(meal.date, meal.hour),
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  mealsSorted.forEach((meal, index) => {
    if (meal.isDiet) {
      let currentSequence = 1;
      let nextMeal = mealsSorted[index + 1];
      while (nextMeal && nextMeal.isDiet) {
        currentSequence += 1;
        nextMeal = mealsSorted[index + currentSequence];
      }
      bestSequence = Math.max(bestSequence, currentSequence);
    }
  });

  return bestSequence;
}
