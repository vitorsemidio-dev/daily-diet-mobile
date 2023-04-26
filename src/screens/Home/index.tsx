import logoImg from '@assets/logo.png';
import {
  Banner,
  Button,
  Container,
  Header,
  Logo,
  MealsContainer,
  ProfileImage,
  Text,
  Title,
} from './styles';
import { useTheme } from 'styled-components';

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
          <Text style={{ color: theme.COLORS.BASE_WHITE }}>Nova Refeição</Text>
        </Button>
      </MealsContainer>
    </Container>
  );
}
