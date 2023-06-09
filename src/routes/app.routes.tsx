import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailMeal } from '@screens/DetailMeal';
import { FeedbackMeal } from '@screens/FeedbackMeal';
import { Home } from '@screens/Home';
import { Metrics } from '@screens/Metrics';
import { NewMeal } from '@screens/NewMeal';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="metrics" component={Metrics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="feedbackMeal" component={FeedbackMeal} />
      <Screen name="detailMeal" component={DetailMeal} />
    </Navigator>
  );
}
