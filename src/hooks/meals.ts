import { Meal } from '@storage/types';
import { formatPercent } from '@utils/format-percent';

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
    return 0;
  };

  return {
    getTotal,
    getMealDiet,
    getMealNotDiet,
    getMealPercent,
    getMealPercentFormatted,
    getMealBestSequence,
  };
}
