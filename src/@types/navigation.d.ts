import { DetailMealRouteParams } from '@screens/DetailMeal';
import { FeedbackRouteParams } from '@screens/FeedbackMeal';
import { NewMealRouteParams } from '@screens/NewMeal';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      metrics: undefined;
      newMeal: NewMealRouteParams;
      feedbackMeal: FeedbackRouteParams;
      detailMeal: DetailMealRouteParams;
    }
  }
}
