import logoImg from '@assets/logo.png';
import { Banner } from '@components/Banner';
import { Text, Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { FlatList } from 'react-native';
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

type Meal = {
  id: number;
  name: string;
  time: string;
  type: 'success' | 'danger';
};

type MealsGroupedByDay = {
  date: string;
  meals: Array<Meal>;
};

const mealsGroupedByDay: MealsGroupedByDay[] = [
  {
    date: '12.08.22',
    meals: [
      {
        id: 1,
        name: 'X-Tudo',
        time: '20:00',
        type: 'danger',
      },
      {
        id: 2,
        name: 'Whey protein com leite',
        time: '16:00',
        type: 'success',
      },
      {
        id: 3,
        name: 'Salada César',
        time: '12:00',
        type: 'success',
      },
    ],
  },
  {
    date: '12.08.21',
    meals: [
      {
        id: 1,
        name: 'Salada',
        time: '17:00',
        type: 'success',
      },
      {
        id: 2,
        name: 'Whey protein com leite',
        time: '16:00',
        type: 'success',
      },
    ],
  },
  {
    date: '12.08.20',
    meals: [
      {
        id: 1,
        name: 'Tapioca',
        time: '16:00',
        type: 'danger',
      },
      {
        id: 2,
        name: 'Whey protein com leite',
        time: '12:00',
        type: 'success',
      },
    ],
  },
];

export function Home() {
  const theme = useTheme();
  const navigate = useNavigation();

  function handleNavigateToMetrics() {
    navigate.navigate('metrics');
  }

  function handleNavigateToNewMeal() {
    navigate.navigate('newMeal');
  }

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
            data={mealsGroupedByDay}
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
