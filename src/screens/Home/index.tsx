import logoImg from '@assets/logo.png';
import { Banner } from '@components/Banner';
import { Text, Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { mealFetch } from '@storage/mealFetch';
import { sortBy } from '@utils/sort-by';
import { useLayoutEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import {
  Button,
  Circle,
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

type MealFetchResult = {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

function groupByDate(meals: MealFetchResult[]) {
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

type Meal = {
  id: number;
  name: string;
  time: string;
  type: 'success' | 'danger';
};

type MealsGroupedByDate = {
  date: string;
  meals: Array<Meal>;
};

export function Home() {
  const theme = useTheme();
  const navigate = useNavigation();
  const [meals, setMeals] = useState<MealFetchResult[]>([]);
  const mealsGroupedByDate = groupByDate(meals);

  function handleNavigateToMetrics() {
    navigate.navigate('metrics');
  }

  function handleNavigateToNewMeal() {
    navigate.navigate('newMeal');
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

      <Banner variant="success" style={{ marginTop: 32 }}>
        <Feather
          name="arrow-up-right"
          color={theme.COLORS.BRAND_GREEN_DARK}
          size={24}
          style={{ position: 'absolute', top: 8, right: 8 }}
          onPress={handleNavigateToMetrics}
        />
        <Title size="lg">90,86%</Title>
        <Text>das refeições dentro da dieta</Text>
      </Banner>

      <MealsContainer>
        <Text>Refeições</Text>

        <Button activeOpacity={0.85} onPress={handleNavigateToNewMeal}>
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
                    <DayMealItem key={meal.id}>
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
