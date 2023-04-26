import logoImg from '@assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Banner,
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
  Text,
  Title,
} from './styles';

export function Home() {
  const theme = useTheme();
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

      <Banner variant="success">
        <Title size="lg">90,86%</Title>
        <Text>das refeições dentro da dieta</Text>
      </Banner>

      <MealsContainer>
        <Text>Refeições</Text>

        <Button>
          <MaterialIcons name="add" color={theme.COLORS.BASE_WHITE} size={24} />
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
