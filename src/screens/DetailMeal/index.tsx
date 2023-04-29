import { Button } from '@components/Button';
import { Circle } from '@components/Circle';
import { HeaderScreen } from '@components/HeaderScreen';
import { Text, Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { mealGet } from '@storage/mealGet';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  Content,
  DateAndTimeContainer,
  Footer,
  Info,
  MealContainer,
  Tag,
} from './styles';

export type DetailMealRouteParams = {
  mealId: number;
};

type MealFetchResult = {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

export function TagDietOn() {
  return (
    <Tag>
      <Circle type="success" size={8} intensity="dark" />
      <Text size="sm">Dentro da dieta</Text>
    </Tag>
  );
}

export function TagDietOff() {
  return (
    <Tag>
      <Circle type="danger" size={8} intensity="dark" />
      <Text size="sm">Fora da dieta</Text>
    </Tag>
  );
}

export function DetailMeal() {
  const theme = useTheme();
  const navigate = useNavigation();
  const route = useRoute();
  const [meal, setMeal] = useState<MealFetchResult>({} as MealFetchResult);
  const { mealId } = route.params as DetailMealRouteParams;

  useEffect(() => {
    mealGet(mealId).then((response) => {
      setMeal(response);
    });
  }, []);

  const handleEditMeat = () => {
    navigate.navigate('newMeal', { mealId });
  };

  return (
    <Container>
      <HeaderScreen title="Refeição" />
      <Content>
        <Info>
          <MealContainer>
            <Title>{meal.name}</Title>
            <Text>{meal.description}</Text>
          </MealContainer>
          <DateAndTimeContainer>
            <Title size="sm">Data e hora</Title>
            <Text size="sm">
              {meal.date} as {meal.hour}
            </Text>
          </DateAndTimeContainer>
          {meal.isDiet ? <TagDietOn /> : <TagDietOff />}
        </Info>

        <Footer>
          <Button onPress={handleEditMeat}>
            <Feather name="edit" color={theme.COLORS.BASE_WHITE} size={24} />
            <Text
              style={{
                color: theme.COLORS.BASE_GRAY_600,
              }}
            >
              Editar refeição
            </Text>
          </Button>
          <Button type="outline">
            <Feather
              name="trash"
              color={theme.COLORS.BASE_GRAY_100}
              size={24}
            />
            <Text
              style={{
                color: theme.COLORS.BASE_GRAY_100,
              }}
            >
              Excluir refeição
            </Text>
          </Button>
        </Footer>
      </Content>
    </Container>
  );
}
