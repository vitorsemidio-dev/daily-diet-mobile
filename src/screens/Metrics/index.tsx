import { Banner } from '@components/Banner';
import { Text, Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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

  function goBack() {
    navigate.goBack();
  }

  return (
    <Container>
      <Banner variant="success" style={{ height: 200 }}>
        <Feather
          name="arrow-left"
          size={24}
          color={theme.COLORS.BRAND_GREEN_DARK}
          style={{ position: 'absolute', left: 24, top: '33%' }}
          onPress={goBack}
        />
        <Title size="lg">90,86%</Title>
        <Text>das refeições dentro da dieta</Text>
      </Banner>

      <MetricsContainer>
        <Title size="sm" style={{ textAlign: 'center' }}>
          Estatíticas gerais
        </Title>
        <DataMetricsContainer>
          <Banner>
            <Title>22</Title>
            <Text>melhor sequência de pratos dentro da dieta dieta</Text>
          </Banner>
          <Banner>
            <Title>109</Title>
            <Text>refeições registradas</Text>
          </Banner>
          <InfoContainer>
            <Banner variant="success" style={{ width: '48.5%' }}>
              <Title>99</Title>
              <Text align="center">refeições dentro da dieta</Text>
            </Banner>
            <Banner variant="danger" style={{ width: '48.5%' }}>
              <Title>10</Title>
              <Text align="center">refeições fora da dieta</Text>
            </Banner>
          </InfoContainer>
        </DataMetricsContainer>
      </MetricsContainer>
    </Container>
  );
}
