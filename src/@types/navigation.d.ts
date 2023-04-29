export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      metrics: undefined;
      newMeal: {
        mealId?: number;
      };
      feedbackMeal: {
        dietType: 'on' | 'off';
      };
      detailMeal: {
        mealId: number;
      };
    }
  }
}
