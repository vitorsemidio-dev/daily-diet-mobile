import logoImg from '@assets/logo.png';
import { Banner } from '@components/Banner';
import { Button } from '@components/Button';
import { Circle } from '@components/Circle';
import { Text, Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useMeals } from '@hooks/meals';
import { useNavigation } from '@react-navigation/native';
import { mealFetch } from '@storage/mealFetch';
import { Meal } from '@storage/types';
import { sortBy } from '@utils/sort-by';
import { useLayoutEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import {
  Container,
  DayMealContainer,
  DayMealGroupList,
  DayMealItem,
  DayMealList,
  Divider,
  Header,
  Logo,
  MealsContainer,
  ProfileImage,
} from './styles';

function groupByDate(meals: Meal[]) {
  const mealsMapped = meals.reduce((acc, meal) => {
    const date = meal.date;
    const mealGroup = acc.find((group) => group.date === date);
    if (mealGroup) {
      mealGroup.meals.push({
        id: meal.id,
        name: meal.name,
        time: meal.hour,
        type: meal.isDiet ? 'success' : 'danger',
      });
    } else {
      acc.push({
        date,
        meals: [
          {
            id: meal.id,
            name: meal.name,
            time: meal.hour,
            type: meal.isDiet ? 'success' : 'danger',
          },
        ],
      });
    }
    return acc;
  }, [] as MealsGroupedByDate[]);

  return mealsMapped.sort(sortBy('date', 'desc'));
}

type MealItem = {
  id: number;
  name: string;
  time: string;
  type: 'success' | 'danger';
};

type MealsGroupedByDate = {
  date: string;
  meals: Array<MealItem>;
};

export function Home() {
  const theme = useTheme();
  const navigate = useNavigation();

  const [meals, setMeals] = useState<Meal[]>([]);
  const mealsGroupedByDate = groupByDate(meals);
  const { metrics } = useMeals(meals);

  function handleNavigateToMetrics() {
    navigate.navigate('metrics');
  }

  function handleNavigateToNewMeal() {
    navigate.navigate('newMeal');
  }

  function handleNavigateToDetailMeal(mealId: number) {
    navigate.navigate('detailMeal', { mealId });
  }

  useLayoutEffect(() => {
    mealFetch().then((mealsResponse) => {
      setMeals(mealsResponse);
    });
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <ProfileImage
          source={{
            uri: 'https://github.com/vitorsemidio-dev.png',
          }}
        />
      </Header>

      <Banner
        variant={metrics.isMostlyDiet ? 'success' : 'danger'}
        style={{ marginTop: 32 }}
      >
        <Feather
          name="arrow-up-right"
          color={
            metrics.isMostlyDiet
              ? theme.COLORS.BRAND_GREEN_DARK
              : theme.COLORS.BRAND_RED_DARK
          }
          size={24}
          style={{ position: 'absolute', top: 8, right: 8 }}
          onPress={handleNavigateToMetrics}
        />
        <Title size="lg">{metrics.metricsPercentFormatted}</Title>
        <Text>das refeições dentro da dieta</Text>
      </Banner>

      <MealsContainer>
        <Text>Refeições</Text>

        <Button onPress={handleNavigateToNewMeal}>
          <Feather name="plus" color={theme.COLORS.BASE_WHITE} size={24} />
          <Text style={{ color: theme.COLORS.BASE_WHITE }}>Nova Refeição</Text>
        </Button>

        <DayMealContainer>
          <FlatList
            data={mealsGroupedByDate}
            keyExtractor={(item) => item.date}
            contentContainerStyle={{ paddingBottom: 80 }}
            renderItem={({ item }) => (
              <DayMealGroupList>
                <Title size="sm">{item.date}</Title>
                <DayMealList>
                  {item.meals.map((meal) => (
                    <DayMealItem
                      key={meal.id}
                      onPress={() => handleNavigateToDetailMeal(meal.id)}
                    >
                      <Title size="sm">{meal.time}</Title>
                      <Divider />
                      <Text style={{ flex: 1 }}>{meal.name}</Text>
                      <Circle type={meal.type} />
                    </DayMealItem>
                  ))}
                </DayMealList>
              </DayMealGroupList>
            )}
          />
        </DayMealContainer>
      </MealsContainer>
    </Container>
  );
}
