import logoImg from '@assets/logo.png';
import {
  Banner,
  Container,
  Header,
  Logo,
  ProfileImage,
  Text,
  Title,
} from './styles';

export function Home() {
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
    </Container>
  );
}
