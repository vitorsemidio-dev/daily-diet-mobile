import logoImg from '@assets/logo.png';
import { Banner } from '@components/Banner';
import { Text, Title } from '@components/Typography';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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

export function Home() {
  const theme = useTheme();
  const navigate = useNavigation();

  function handleNavigateToMetrics() {
    navigate.navigate('metrics');
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

        <Button>
          <Feather name="plus" color={theme.COLORS.BASE_WHITE} size={24} />
          <Text style={{ color: theme.COLORS.BASE_WHITE }}>Nova Refeição</Text>
        </Button>

        <DayMealContainer>
          <DayMealGroupList>
            <Title size="sm">12.08.22</Title>
            <DayMealList>
              <DayMealItem>
                <Title size="sm">20:00</Title>
                <Divider />
                <Text style={{ flex: 1 }}>X-Tudo</Text>
                <Circle type="danger" />
              </DayMealItem>
              <DayMealItem>
                <Title size="sm">16:00</Title>
                <Divider />
                <Text style={{ flex: 1 }}>Whey protein com leite</Text>
                <Circle type="success" />
              </DayMealItem>
              <DayMealItem>
                <Title size="sm">12:00</Title>
                <Divider />
                <Text style={{ flex: 1 }}>Salada César</Text>
                <Circle type="success" />
              </DayMealItem>
            </DayMealList>
          </DayMealGroupList>

          <DayMealGroupList>
            <Title size="sm">12.08.22</Title>
            <DayMealList>
              <DayMealItem>
                <Title size="sm">20:00</Title>
                <Divider />
                <Text style={{ flex: 1 }}>X-Tudo</Text>
                <Circle type="danger" />
              </DayMealItem>
              <DayMealItem>
                <Title size="sm">16:00</Title>
                <Divider />
                <Text style={{ flex: 1 }}>Whey protein com leite</Text>
                <Circle type="success" />
              </DayMealItem>
              <DayMealItem>
                <Title size="sm">12:00</Title>
                <Divider />
                <Text style={{ flex: 1 }}>Salada César</Text>
                <Circle type="success" />
              </DayMealItem>
            </DayMealList>
          </DayMealGroupList>
        </DayMealContainer>
      </MealsContainer>
    </Container>
  );
}
