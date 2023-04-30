import { Banner } from '@components/Banner';
import { Text, Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useMeals } from '@hooks/meals';
import { useNavigation } from '@react-navigation/native';
import { mealFetch } from '@storage/mealFetch';
import { Meal } from '@storage/types';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  DataMetricsContainer,
  InfoContainer,
  MetricsContainer,
} from './styles';

export function Metrics() {
  const theme = useTheme();
  const navigate = useNavigation();
  const [meals, setMeals] = useState<Meal[]>([]);
  const { metrics } = useMeals(meals);

  useEffect(() => {
    mealFetch().then((response) => {
      setMeals(response);
    });
  }, []);

  function goBack() {
    navigate.goBack();
  }

  return (
    <Container>
      <Banner
        variant={metrics.isMostlyDiet ? 'success' : 'danger'}
        style={{ height: 200 }}
      >
        <Feather
          name="arrow-left"
          size={24}
          color={
            metrics.isMostlyDiet
              ? theme.COLORS.BRAND_GREEN_DARK
              : theme.COLORS.BRAND_RED_DARK
          }
          style={{ position: 'absolute', left: 24, top: '33%' }}
          onPress={goBack}
        />
        <Title size="lg">{metrics.metricsPercentFormatted}</Title>
        <Text>das refeições dentro da dieta</Text>
      </Banner>

      <MetricsContainer>
        <Title size="sm" style={{ textAlign: 'center' }}>
          Estatíticas gerais
        </Title>
        <DataMetricsContainer>
          <Banner>
            <Title>{metrics.bestSequence}</Title>
            <Text align="center">
              melhor sequência de pratos dentro da dieta dieta
            </Text>
          </Banner>
          <Banner>
            <Title>{metrics.total}</Title>
            <Text>refeições registradas</Text>
          </Banner>
          <InfoContainer>
            <Banner variant="success" style={{ width: '48.5%' }}>
              <Title>{metrics.diet}</Title>
              <Text align="center">refeições dentro da dieta</Text>
            </Banner>
            <Banner variant="danger" style={{ width: '48.5%' }}>
              <Title>{metrics.notDiet}</Title>
              <Text align="center">refeições fora da dieta</Text>
            </Banner>
          </InfoContainer>
        </DataMetricsContainer>
      </MetricsContainer>
    </Container>
  );
}
